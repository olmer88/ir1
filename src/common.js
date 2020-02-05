const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const { PorterStemmer } = require('natural');

const stopWords = ['the'];

function tokenize(text) {
  return text
    .replace(/[^a-zA-Z ]/g, ' ')
    .replace(/ +/g, ' ')
    .split(' ')
    .filter((term) => term.length > 2 && !stopWords.includes(_.toLower(term)));
}

const { stem } = PorterStemmer;

function getTerms(fileName) {
  const content = fs.readFileSync(path.join('files', fileName), 'utf8');
  const tokens = tokenize(content);
  return tokens.map(stem);
}

const flattenTerms = (termsArrays) => _
  .chain(termsArrays)
  .flatten()
  .uniq()
  .value()
  .sort();
const getFileNames = (ids) => {
  const fileNames = fs.readdirSync('files');
  if (!ids) return fileNames;
  return fileNames.filter((name, id) => ids.map(Number).includes(id));
};
module.exports = {
  getFileNames,
  stem,
  getTerms,
  flattenTerms,
  writeFile: (fileName, content) => fs.writeFileSync(path.join('output', fileName), content),
};
