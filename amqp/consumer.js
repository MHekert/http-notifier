const amqplib = require('amqplib');
const notify = require('../src/notify');
const { rabbit } = require('../config');

const consume = async (queueName = rabbit.queueName, url = rabbit.url) => {
	const conn = await amqplib.connect(url);
	const channel = await conn.createChannel();
	const queue = await channel.assertQueue(queueName);
	channel.consume(queue.queue, async (msg) => {
		await notify(JSON.parse(msg.content.toString()));
		channel.ack(msg);
	});
};

module.exports = {
	consume,
};
