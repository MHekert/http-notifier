const handler = require('./handler')
const schema = require('./schemas')

function route(fastify, opts, done) {
    fastify.post('/notify', { schema }, handler);
    done();
}

module.exports = route;