const { appendExamples, checkRabbitParamsCollision } = require('../../../util');
const { rabbitConnectionOptions } = require('../../../options');

const startRabbitBuilder = (yargs) => {
	yargs.options(rabbitConnectionOptions);
	yargs.check(checkRabbitParamsCollision);
	appendExamples(yargs, 'start.rabbit');
};

module.exports = { startRabbitBuilder };
