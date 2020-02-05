const fs = require('fs');
const _ = require('lodash');
const toBeautifulJson = require('json-beautify');
const common = require('../src/common');

const fileNames = common.getFileNames();
const termsByFiles = fileNames.map(common.getTerms).map(_.uniq);
const termToFileIdsMap = {};

termsByFiles.forEach((termsInFile, fileId) => {
  termsInFile.forEach((term) => {
    if (!termToFileIdsMap[term]) termToFileIdsMap[term] = [];
    termToFileIdsMap[term].push(fileId);
  });
});

const json = toBeautifulJson(termToFileIdsMap, undefined, 2, 100);
fs.writeFileSync('invertedIndex.json', json);
