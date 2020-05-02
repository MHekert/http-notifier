const { consume } = require('../../../../amqp');
const { connectBy } = require('../../../util');

const startRabbitHandler = async (argv) => {
	try {
		await consume(argv.queue, connectBy(argv), argv.prefetch);
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = { startRabbitHandler };
