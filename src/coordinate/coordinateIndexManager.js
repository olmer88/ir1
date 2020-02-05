const _ = require('lodash');
const { stem, getFileNames } = require('../common');
const coordinateIndex = require('../../output/coordinateIndex');

const fileToIndexesMap = (word) => coordinateIndex[stem(word)];

function search(word1, word2) {
  const map1 = fileToIndexesMap(word1);
  const map2 = fileToIndexesMap(word2);
  const filesWithTwoTerms = [];
  _.forEach(map1, (firstTermIndexes, file) => {
    if (!map2[file]) return; // 2 слова не зустрічаються у цьому файлі
    const isTerm2AfterTerm1 = _.find(firstTermIndexes, (index) => map2[file].includes(index + 1));
    if (isTerm2AfterTerm1) filesWithTwoTerms.push(file);
  });
  return getFileNames(filesWithTwoTerms);
}

module.exports = { search };
