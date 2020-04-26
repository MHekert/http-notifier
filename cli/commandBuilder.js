const { appendExamples } = require('./util');
const { startBuilder } = require('./modules/start');
const { localBuilder, localHandler } = require('./modules/local');
const { httpBuilder, httpHandler } = require('./modules/http');

const commandBuilder = (yargs) => {
	yargs
		.command('start <server>', 'Start listener server', startBuilder)
		.command('local', 'Show native desktop notification', localBuilder, localHandler)
		.command('http', 'Show native desktop notification', httpBuilder, httpHandler);
	return appendExamples(yargs, 'start');
};

module.exports = { commandBuilder };
