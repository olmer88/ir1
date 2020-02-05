/**
 * node bin/search accessory
 * node bin/search inventors
 * node bin/search accessory AND inventors
 * node bin/search accessory OR inventors
 * node bin/search accessory NOT inventors
 */

const { search } = require('../src/matrix/incidenceMatrixManager');

// eslint-disable-next-line no-console
console.log(search(...process.argv.slice(2)));
