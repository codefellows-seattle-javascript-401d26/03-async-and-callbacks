'use strict';

const _reader = require('./lib/reader');

const frankensteinBookPath = `${__dirname}/data/Frankenstein.txt`;
const aaBookPath = `${__dirname}/data/AA.txt`;
const eveningStarPoemPath = `${__dirname}/data/evening_star.txt`;
const onTheSeasPoemPath = `${__dirname}/data/on_the_seas.txt`;
const gatherReadings = [`${frankensteinBookPath}`, `${aaBookPath}`, `${eveningStarPoemPath}`, `${onTheSeasPoemPath}`];

const CHARACTERS_TO_READ = 200;
const printString = (string) => {
  console.log(string);
  console.log('------------------------------------------');
};

_reader.readFirstNCharactersAsync(gatherReadings[0], CHARACTERS_TO_READ, (reading1) => {
  printString(reading1);
  _reader.readFirstNCharactersAsync(gatherReadings[1], CHARACTERS_TO_READ, (reading2) => {
    printString(reading2);
    _reader.readFirstNCharactersAsync(gatherReadings[2], CHARACTERS_TO_READ, (reading3) => {
      printString(reading3);
      _reader.readFirstNCharactersAsync(gatherReadings[3], CHARACTERS_TO_READ, (reading4) => {
        printString(reading4);
      });
    });
  });
});
