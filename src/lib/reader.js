'use strict';

const fs = require('fs');

const read = module.exports = {};

read.readFiles = (paths, callback) => {
  const arrayWithTextFromFiles = [];
  fs.readFile(paths[0], (error, text) => {
    if (error) {
      callback(error, null);
    } else {
      arrayWithTextFromFiles.push(text.toString());
    }
    fs.readFile(paths[1], (errorSecond, textSecond) => {
      if (error) {
        callback(error, null);
      } else {
        arrayWithTextFromFiles.push(textSecond.toString());
      }
      fs.readFile(paths[2], (errorThird, textThird) => {
        if (error) {
          callback(error, null);
        } else {
          arrayWithTextFromFiles.push(textThird.toString());
        }
        if (arrayWithTextFromFiles[2]) {
          callback(null, arrayWithTextFromFiles);
          return arrayWithTextFromFiles;
        }
        return undefined;
      });
    });
  });
};
