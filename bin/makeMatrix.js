const _ = require('lodash');
const toBeautifulJson = require('json-beautify');
const common = require('../src/common');

const fileNames = common.getFileNames();
const termsByFiles = fileNames.map(common.getTerms).map(_.uniq);
const terms = common.flattenTerms(termsByFiles);
const termFileIncidenceMatrix = {};
terms.forEach((term) => {
  termFileIncidenceMatrix[term] = termsByFiles
    .map((termsInFile) => (termsInFile.includes(term) ? 1 : 0));
});
const json = toBeautifulJson(termFileIncidenceMatrix, undefined, 2, 100);
common.writeFile('termFileIncidenceMatrix.json', json);
