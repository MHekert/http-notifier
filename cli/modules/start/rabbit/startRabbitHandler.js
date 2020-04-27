const { consume } = require('../../../../amqp');
const { connectBy } = require('../../../util');

const startRabbitHandler = async (argv) => {
	try {
		await consume(argv.queue, connectBy(argv));
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = { startRabbitHandler };
