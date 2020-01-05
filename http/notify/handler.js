const notify = require('../../src/notify');

const handler = async (req, reply) => {
    try {
        const response = await notify(req.body);
        reply.send({response, success: true});
    } catch(error) {
        reply.send({response, success: false})
    }
}

module.exports = handler;