const notify = require('../../notify');

const handler = async (req, reply) => {
	try {
		const response = await notify(req.body);
		reply.send({ response });
	} catch (error) {
		reply.code(500).send({ error: error.message });
	}
};

module.exports = handler;
