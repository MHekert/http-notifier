const { httpOptions } = require('./httpOptions');
const { appendExamples } = require('../../util');

const httpBuilder = (yargs) => {
	yargs.options(httpOptions);
	return appendExamples(yargs, 'http');
};

module.exports = { httpBuilder };
