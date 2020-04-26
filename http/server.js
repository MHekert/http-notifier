const fastify = require('fastify')({ logger: true });
const notify = require('./notify');

fastify.register(notify);

const start = async (port) => {
	try {
		await fastify.listen(port);
		fastify.log.info(`server listening on ${fastify.server.address().port}`);
	} catch (err) {
		fastify.log.error(err);
	}
};

module.exports = { start };
