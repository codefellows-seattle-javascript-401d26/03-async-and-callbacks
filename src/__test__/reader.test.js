'use strict';

const _reader = require('../lib/reader');

//////// ooollldddd code

describe('Running the _arithmetic.add and _arithmetic.sub method', () => {
  test('add: If a + b = 4', () => {
    expect(_arithmetic.add(2, 2)).toEqual(4);
  });

  test('add: If value is NaN', () => {
    expect(_arithmetic.add('a', 2)).toEqual(null);
  });

  test('sub: If a - b = 4', () => {
    expect(_arithmetic.sub(2, 2)).toEqual(0);
  });

  test('sub: If value is NaN', () => {
    expect(_arithmetic.sub('a', 2)).toEqual(null);
  });
});

// nneeewewww code

const fileReader = require('../lib/file-reader');

const litanyPath = `${__dirname}/../data/litany.txt`;

describe('#file-reader.js', () => {
  test('The first 5 characters of a file should be read', (done) => {
    return fileReader.readFirstNCharactersAsync(litanyPath, 5, (data) => {
      expect(data).toEqual('I mus');
      done();
    });
  });
});
