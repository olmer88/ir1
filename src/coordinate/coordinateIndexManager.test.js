const { search } = require('./coordinateIndexManager');

const paramsResPairs = [
  [['Dorian', 'Gray'], ['The Picture of Dorian Gray.txt']],
  [['original', 'edition'], ['Moby Dick.txt']],
  [['edition', 'original'], []],
  [['original', 'inventor'], ['Moby Dick.txt']],
  [['edition', 'inventor'], []],
];
describe('invertedIndexManager', () => {
  paramsResPairs.forEach(([params, res]) => {
    const actualRes = search(...params);
    res.forEach((filename) => {
      it(`"${params.join(' ')}" query should have ${filename} in response`, () => {
        expect(actualRes).toContain(filename);
      });
    });
    it(`"${params.join(', ')}" query response length should be ${res.length}`, () => {
      expect(actualRes.length).toBe(res.length);
    });
  });
});
