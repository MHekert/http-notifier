const amqplib = require('amqplib');
const { rabbit } = require('../config');

const publish = async (
	data,
	queueName = rabbit.queueName,
	options = rabbit.options,
	url = rabbit.url
) => {
	const conn = await amqplib.connect(url);
	const channel = await conn.createConfirmChannel();
	const queue = await channel.assertQueue(queueName);

	const message = Buffer.from(JSON.stringify(data));
	await channel.sendToQueue(queue.queue, message, options, async (err) => {
		if (err) console.error(err);
		await conn.close();
	});
};

module.exports = {
	publish,
};
