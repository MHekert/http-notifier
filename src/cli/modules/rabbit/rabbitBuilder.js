const { intersection } = require('lodash');
const { rabbitConnectionOptions } = require('../../options');
const { notificationOptions } = require('../../options/notification');
const { appendExamples, checkRabbitParamsCollision } = require('../../util');
const { rabbit } = require('../../../../config');

const rabbitBuilder = (yargs) => {
	yargs.options({
		...rabbitConnectionOptions,
		...notificationOptions,
		q: {
			alias: ['queues', 'queue'],
			descirbe: 'Queue name',
			type: 'array',
			default: rabbit.queueNames,
		},
		r: {
			alias: ['routing-key', 'rkey', 'route'],
			descirbe: 'routing key used to bind queues',
			type: 'string',
		},
		e: {
			alias: ['exchange', 'exchange-name', 'ename'],
			describe: 'Exchange name',
			type: 'string',
		},
		type: {
			alias: ['exchange-type', 'etype'],
			choices: ['fanout', 'direct', 'topic'],
		},
		sendToQueue: {
			alias: ['skip-exchange', 'skipExchange', 'send-to-queue'],
			type: 'boolean',
			describe:
				'sends directly to queue, when specified routing key, exchange name and type are ignored',
			default: true,
		},
	});
	yargs.check(checkRabbitParamsCollision);
	yargs.check((argv) => {
		const exchangeKeys = ['r', 'e', 'type'];
		if (argv.sendToQueue) {
			if (intersection(Object.keys(argv), exchangeKeys).length) {
				throw new Error(`Cannot specify ${exchangeKeys.join()} when sendToQueue specified`);
			}
			if (argv.q.length !== 1) {
				throw new Error('Cannot specify more than 1 queue when skipping exchange');
			}
		}
		if (argv.type === 'fanout' && argv.route) {
			throw new Error('Cannot specify routing key for fanout exchange');
		}
		if (['direct', 'topic'].includes(argv.type) && !argv.rkey) {
			throw new Error(`Requires routing key for ${argv.type} exchange`);
		}

		return true;
	});
	appendExamples(yargs, 'rabbit');
};

module.exports = { rabbitBuilder };
