const { publish } = require('../../../amqp/publisher');
const { connectBy, getNotificationParams } = require('../../util');

const rabbitHandler = async (argv) => {
	try {
		await publish(getNotificationParams(argv), argv.queue, connectBy(argv));
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = { rabbitHandler };
