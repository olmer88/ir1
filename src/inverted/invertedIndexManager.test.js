const { search } = require('./invertedIndexManager');

const paramsResPairs = [
  [['accessory'], ['Moby Dick.txt', 'Sherlock Holmes.txt']],
  [['inventors'], ['Moby Dick.txt', 'Dracula.txt']],
  [['accessory', 'and', 'inventors'], ['Moby Dick.txt']],
  [['accessory', 'or', 'inventors'], ['Moby Dick.txt', 'Sherlock Holmes.txt', 'Dracula.txt']],
  [['accessory', 'not', 'inventors'], ['Sherlock Holmes.txt']],
];
describe('invertedIndexManager', () => {
  paramsResPairs.forEach(([params, res]) => {
    const actualRes = search(...params);
    res.forEach((filename) => {
      it(`"${params.join(', ')}" query should have ${filename} in response`, () => {
        expect(actualRes).toContain(filename);
      });
    });
    it(`"${params.join(', ')}" query response length should be ${res.length}`, () => {
      expect(actualRes.length).toBe(res.length);
    });
  });
});
