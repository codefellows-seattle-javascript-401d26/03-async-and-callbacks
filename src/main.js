'use strict';

const _reader = require('./lib/reader');

const frankensteinBookPath = `${__dirname}/data/Frankenstein.txt`;
const aaBookPath = `${__dirname}/data/ulysses.txt`;
const eveningStarPoemPath = `${__dirname}/data/moby-dick.txt`;
const onTheSeasPoemPath = `${__dirname}/data/sherlock.txt`;
const gatherReadings = [`${frankensteinBookPath}`, `${aaBookPath}`, `${eveningStarPoemPath}`, `${onTheSeasPoemPath}`];

const CHARACTERS_TO_READ = 30;
const printString = (string) => {
  console.log(string);
  console.log('------------------------------------------');
};

for (let lengthOfReadings = gatherReadings.length - 1; lengthOfReadings >= 0; lengthOfReadings--) {
  _reader.readFirstNCharactersAsync(gatherReadings[lengthOfReadings],
    CHARACTERS_TO_READ,
    (reading) => {
      printString(reading);
    });
}
