const amqplib = require('amqplib');
const { rabbit } = require('../../config');

const publish = async (
	data,
	exchangeName,
	exhangeType,
	routingKey,
	queueNames = rabbit.queueNames,
	url = rabbit.url,
	options = {}
) => {
	const conn = await amqplib.connect(url);
	const channel = await conn.createConfirmChannel();
	await channel.assertExchange(exchangeName, exhangeType);

	const setupPromises = queueNames.map(async (qName) => {
		await channel.assertQueue(qName);
		return channel.bindQueue(qName, exchangeName, routingKey);
	});
	await Promise.all(setupPromises);

	const message = Buffer.from(JSON.stringify(data));
	await channel.publish(exchangeName, routingKey, message, options, async (err) => {
		if (err) console.error(err);
		await conn.close();
	});
};

module.exports = {
	publish,
};
