const { appendExamples } = require('./util');
const { startBuilder } = require('./modules/start');
const { localBuilder, localHandler } = require('./modules/local');
const { httpBuilder, httpHandler } = require('./modules/http');
const { rabbitBuilder, rabbitHandler } = require('./modules/rabbit');

const commandBuilder = (yargs) => {
	yargs
		.command('start <server>', 'Start listener server', startBuilder)
		.command('local', 'Show native desktop notification', localBuilder, localHandler)
		.command(
			'http',
			'Sends http request to display native notification on remote desktop',
			httpBuilder,
			httpHandler
		)
		.command(
			'publish',
			'Publishes notification to RabbitMQ queue to display',
			rabbitBuilder,
			rabbitHandler
		);
	return appendExamples(yargs, 'start');
};

module.exports = { commandBuilder };
