const _ = require('lodash');
const toBeautifulJson = require('json-beautify');
const common = require('../src/common');

const fileNames = common.getFileNames();
const termsByFiles = fileNames.map(common.getTerms);
const twoWordsTermsByFiles = termsByFiles.map((terms) => (
  terms.slice(0, terms.length - 1).map((term, index) => `${term} ${terms[index + 1]}`)
));
const termsByFilesUniqOneWord = termsByFiles.map(_.uniq);
const termsByFilesUniqTwoWords = twoWordsTermsByFiles.map(_.uniq);
const termsByFilesUniqAll = _.mergeWith(
  termsByFilesUniqOneWord,
  termsByFilesUniqTwoWords,
  (arr1, arr2) => arr1.concat(arr2),
);
const termToFileIdsMap = {};
termsByFilesUniqAll.forEach((termsInFile, fileId) => {
  termsInFile.forEach((term) => {
    if (!termToFileIdsMap[term]) termToFileIdsMap[term] = [];
    termToFileIdsMap[term].push(fileId);
  });
});

const json = toBeautifulJson(termToFileIdsMap, undefined, 2, 100);
common.writeFile('invertedIndex.json', json);
