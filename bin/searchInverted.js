/**
 * yarn search-inverted accessory
 * yarn search-inverted inventors
 * yarn search-inverted accessory AND inventors
 * yarn search-inverted accessory OR inventors
 * yarn search-inverted accessory NOT inventors
 */

const { search } = require('../src/inverted/invertedIndexManager');

// eslint-disable-next-line no-console
console.log(search(...process.argv.slice(2)));
