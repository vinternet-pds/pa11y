var readDir = require('readdir');


exports.standard = 'WCAG2AA'; // set test standards
exports.ignore = ['warning', 'notice']; // ignore WCAG warnings and notices
// Log what's happening to the console
exports.log = {
  debug: console.log.bind(console),
  error: console.error.bind(console),
  info: console.log.bind(console)
};
exports.concurrency = '10'; // set the concurrency here to run more tests in parallel


function getFiles(){
  const arr = [];
  const filePath = 'file://' + process.cwd() + '/';
  const files = readDir.readSync( './', ['**.html'] );
  for (var i = 0; i < files.length; i++) {
    arr.push(filePath + files[i]);
  }
  return arr;
}
exports.urls = getFiles();


// debug: check module output
// console.log(module);
