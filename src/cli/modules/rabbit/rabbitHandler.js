const { publish, sendToQueue } = require('../../../amqp');
const { connectBy, getNotificationParams } = require('../../util');

const rabbitHandler = async (argv) => {
	try {
		console.log(argv.sendToQueue);
		if (argv.sendToQueue) {
			await sendToQueue(getNotificationParams(argv), argv.queues[0], connectBy(argv));
		} else {
			await publish(
				getNotificationParams(argv),
				argv.exchangeName,
				argv.exchangeType,
				argv.routingKey,
				argv.queues,
				connectBy(argv)
			);
		}
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = { rabbitHandler };
