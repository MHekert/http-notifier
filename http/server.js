const fastify = require('fastify')({ logger: true });
const notify = require('./notify');

fastify.register(notify);

const start = async () => {
	try {
		await fastify.listen(3000);
		fastify.log.info(`server listening on ${fastify.server.address().port}`);
	} catch (err) {
		fastify.log.error(err);
	}
};
start();
