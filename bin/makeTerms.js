const common = require('../src/common');

const fileNames = common.getFileNames();
const termsByFiles = fileNames.map(common.getTerms);
const terms = common.flattenTerms(termsByFiles);
common.writeFile('terms.txt', terms);
common.writeFile('terms.json', JSON.stringify(terms));
