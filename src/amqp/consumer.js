const amqplib = require('amqplib');
const notify = require('../notify');
const { rabbit } = require('../../config');

const consume = async (queueName = rabbit.queueName, url = rabbit.url, prefetch) => {
	const conn = await amqplib.connect(url);
	const channel = await conn.createChannel();
	if (prefetch) channel.prefetch(prefetch);
	await channel.assertQueue(queueName);

	channel.consume(queueName, async (msg) => {
		await notify(JSON.parse(msg.content.toString()));
		channel.ack(msg);
	});
};

module.exports = {
	consume,
};
