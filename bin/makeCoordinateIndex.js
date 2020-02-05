const _ = require('lodash');
const toBeautifulJson = require('json-beautify');
const common = require('../src/common');

const fileNames = common.getFileNames();
const termsByFiles = fileNames.map(common.getTerms);
const termToFileIdsMap = {};
termsByFiles.forEach((termsInFile, fileId) => {
  termsInFile.forEach((term, index) => {
    if (!termToFileIdsMap[term]) termToFileIdsMap[term] = {};
    if (!termToFileIdsMap[term][fileId]) termToFileIdsMap[term][fileId] = [];
    termToFileIdsMap[term][fileId].push(index);
  });
});

const json = toBeautifulJson(termToFileIdsMap, undefined, 2, 100);
common.writeFile('coordinateIndex.json', json);
