const { rabbitConnectionOptions } = require('../../options');
const { notificationOptions } = require('../../options/notification');
const { appendExamples, checkRabbitParamsCollision } = require('../../util');

const rabbitBuilder = (yargs) => {
	yargs.options({
		...rabbitConnectionOptions,
		...notificationOptions,
	});
	yargs.check(checkRabbitParamsCollision);
	appendExamples(yargs, 'rabbit');
};

module.exports = { rabbitBuilder };
