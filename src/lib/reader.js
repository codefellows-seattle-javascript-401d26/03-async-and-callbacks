'use strict';

const fs = require('fs');

// Define arithmetic
const reader = {};

reader.readFirstNCharactersAsync = (filePath, characterReadLimit, callbackFn) => {
  console.log(`Reading ${filePath}`);
  return fs.readFile(filePath, (error, data) => {
    if (error) {
      return callbackFn(error);
    }
    return callbackFn(data.toString('utf8', 0, characterReadLimit));
  });
};

module.exports = reader;
