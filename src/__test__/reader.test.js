'use strict';

const read = require('../lib/reader');

const footloose = [`Been working so hard
I'm punching my card
Eight hours, for what
Oh, tell me what I got
`, `That time's just holding me down
I'll hit the ceiling
Or else I'll tear up this town
Now I gotta cut
`, `Loose, footloose
Kick off your Sunday shoes
Please, Louise
Pull me offa' my knees
Jack, get back
C'mon before we crack
Lose your blues
Everybody cut footloose
`];

const paths = [`${__dirname}/../data/yeet.txt`, `${__dirname}/../data/good.txt`, `${__dirname}/../data/test.txt`];
describe('#reader', () => {
  test('happy path aka It Just Works, inserting an array and getting some stuff out of that array', (done) => {
    return read.readFiles(paths, (error, data) => {
      expect(data).toEqual(footloose);
      done();
    });
  });
  test('wrong path aka It Errors, inserting invalid stuff and getting error', (done) => {
    return read.readFiles(['yeet', 'yaw', 'yeeyee'], (error) => {
      expect(error).not.toEqual(null);
      done();
    });
  });
});
