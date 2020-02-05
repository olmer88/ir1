/**
 * node bin/search accessory
 * node bin/search inventors
 * node bin/search accessory AND inventors
 * node bin/search accessory OR inventors
 * node bin/search accessory NOT inventors
 */

const _ = require('lodash');
const { stem, getFileNames } = require('../common');
const termFileIncidenceMatrix = require('../../output/termFileIncidenceMatrix');

const operatorToQueryProcessorMap = {
  ONE_WORD: (presenceMap1) => presenceMap1,
  AND: (presenceMap1, presenceMap2) => (
    presenceMap1.map((present, id) => (present && presenceMap2[id] ? 1 : 0))
  ),
  OR: (presenceMap1, presenceMap2) => (
    presenceMap1.map((present, id) => (present || presenceMap2[id] ? 1 : 0))
  ),
  NOT: (presenceMap1, presenceMap2) => (
    presenceMap1.map((present, id) => (present && !presenceMap2[id] ? 1 : 0))
  ),
};
const getFileToPresenceMap = (word) => termFileIncidenceMatrix[stem(word)];

function search(word1, operator = 'ONE_WORD', word2 = '') {
  const processQuery = operatorToQueryProcessorMap[_.toUpper(operator)];
  const fileToPresenceMap = processQuery(getFileToPresenceMap(word1), getFileToPresenceMap(word2));
  const fileIds = fileToPresenceMap
    .map((present, fileId) => (present ? fileId : null))
    .filter((fileId) => fileId !== null);
  return getFileNames(fileIds);
}

module.exports = { search };
