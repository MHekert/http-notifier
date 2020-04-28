const { appendExamples } = require('../../../util');
const { rabbitConnectionOptions } = require('../../../options');

const startRabbitBuilder = (yargs) => {
	yargs.options(rabbitConnectionOptions);
	appendExamples(yargs, 'start.rabbit');
};

module.exports = { startRabbitBuilder };
