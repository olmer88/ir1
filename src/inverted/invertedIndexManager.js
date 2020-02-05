const _ = require('lodash');
const { stem, getFileNames } = require('../common');
const invertedIndex = require('../../output/invertedIndex');

const operatorToQueryProcessorMap = {
  ONE_WORD: (fileIds) => fileIds,
  AND: _.intersection,
  OR: (fileIds1, fileIds2) => [...fileIds1, ...fileIds2],
  NOT: (fileIds1, fileIds2) => fileIds1.filter((id) => !fileIds2.includes(id)),
};

function search(word1, operator = 'ONE_WORD', word2 = '') {
  const getFileIds = (word) => invertedIndex[stem(word)];
  const processQuery = operatorToQueryProcessorMap[_.toUpper(operator)];
  const fileIds = processQuery(getFileIds(word1), getFileIds(word2));
  return getFileNames(fileIds);
}

module.exports = { search };
