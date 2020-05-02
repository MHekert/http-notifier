const amqplib = require('amqplib');
const { rabbit } = require('../../config');

const sendToQueue = async (data, queue, url = rabbit.url, options = {}) => {
	const conn = await amqplib.connect(url);
	const channel = await conn.createConfirmChannel();
	await channel.assertQueue(queue);

	const message = Buffer.from(JSON.stringify(data));
	await channel.sendToQueue(queue, message, options, async (err) => {
		if (err) console.error(err);
		await conn.close();
	});
};

module.exports = {
	sendToQueue,
};
