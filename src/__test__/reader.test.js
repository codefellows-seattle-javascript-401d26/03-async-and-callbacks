'use strict';

const _reader = require('../lib/reader');
const aaPath = `${__dirname}/../data/AA.txt`;

describe('#file-reader.js', () => {
  test('The first 20 characters of a file should be read', (done) => {
    return _reader.readFirstNCharactersAsync(aaPath, 20, (data) => {
      expect(data).toEqual('The text of the 1st ');
      done();
    });
  });
});
