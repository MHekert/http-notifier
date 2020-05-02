const { appendExamples, checkRabbitParamsCollision } = require('../../../util');
const { rabbitConnectionOptions } = require('../../../options');
const { rabbit } = require('../../../../../config');

const prefetchOption = {
	prefetch: {
		describe:
			'the maximum number of messages sent over the channel that can be awaiting acknowledgement',
		type: 'number',
	},
	q: {
		alias: ['queue'],
		descirbe: 'Queue name',
		type: 'string',
		default: rabbit.queueNames[0],
	},
};

const startRabbitBuilder = (yargs) => {
	yargs.options({
		...rabbitConnectionOptions,
		...prefetchOption,
	});
	yargs.check(checkRabbitParamsCollision);
	appendExamples(yargs, 'start.rabbit');
};

module.exports = { startRabbitBuilder };
