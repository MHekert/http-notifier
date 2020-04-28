const { appendExamples } = require('../../util');
const { startHttpHandler, startHttpBuilder } = require('./http');
const { startRabbitHandler, startRabbitBuilder } = require('./rabbit');

const startBuilder = (yargs) => {
	yargs.command('http', 'starts http server', startHttpBuilder, startHttpHandler);
	yargs.command('rabbit', 'starts rabbit consumer', startRabbitBuilder, startRabbitHandler);

	return appendExamples(yargs, 'start');
};

module.exports = { startBuilder };
