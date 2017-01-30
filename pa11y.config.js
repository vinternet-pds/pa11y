const filePath = 'file://' + process.cwd();

module.exports = {

  standard: 'WCAG2AA', // set test standards
  ignore: ['warning', 'notice'], // ignore WCAG warnings and notices

  // Log what's happening to the console
	log: {
		debug: console.log.bind(console),
		error: console.error.bind(console),
		info: console.log.bind(console)
	},

  concurrency: '2', // set the concurrency here to run more tests in parallel

  // define url(s) or file(s)
  urls: [
    filePath + '/index.html',
    'www.bbc.co.uk'
  ]
};
