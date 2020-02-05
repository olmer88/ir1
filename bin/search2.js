/**
 * node bin/search2 accessory
 * node bin/search2 inventors
 * node bin/search2 accessory AND inventors
 * node bin/search2 accessory OR inventors
 * node bin/search2 accessory NOT inventors
 */

const { search } = require('../src/inverted/invertedIndexManager');

// eslint-disable-next-line no-console
console.log(search(...process.argv.slice(2)));
