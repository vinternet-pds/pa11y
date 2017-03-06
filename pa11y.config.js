var readDir = require('readdir');


exports.standard = 'WCAG2AA'; // set test standards
// exports.ignore = ['warning', 'notice']; // ignore WCAG warnings and notices
// Log what's happening to the console
exports.log = {
  // debug: console.log.bind(console),
  // error: console.error.bind(console),
  info: console.log.bind(console)
};
exports.concurrency = '10'; // set the concurrency here to run more tests in parallel


exports.urls = [
  "https://www.parliament.uk/"
];


// debug: check module output
// console.log(module);
