const { rabbitConnectionOptions } = require('../../options/rabbitConnectionOptions');
const { notificationOptions } = require('../../options/notification');
const { appendExamples } = require('../../util');

const rabbitBuilder = (yargs) => {
	yargs.options({
		...rabbitConnectionOptions,
		...notificationOptions,
	});
	appendExamples(yargs, 'rabbit');
};

module.exports = { rabbitBuilder };
