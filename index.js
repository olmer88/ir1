const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const fileNames = fs.readdirSync('files');
const terms = _.chain(fileNames.map(getTerms)).flatten()
  .uniq()
  .value()
  .sort()
;
fs.writeFileSync('terms.txt', terms);

function getTerms(fileName) {
  const content = fs.readFileSync(path.join('files', fileName), 'utf8');
  const terms = content
    .replace(/[^a-zA-Z ]/g, ' ')
    .replace(/ +/, ' ')
    .split(' ')
    .filter(term => term.length > 2)
  ;
  return terms.map(term => _.toLower(term));
}
