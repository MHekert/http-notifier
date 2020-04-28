const { appendExamples } = require('../../../util');
const { rabbitConnectionOptions } = require('../../../options/rabbitConnectionOptions');

const startRabbitBuilder = (yargs) => {
	yargs.options(rabbitConnectionOptions);
	appendExamples(yargs, 'start.rabbit');
};

module.exports = { startRabbitBuilder };