const { pick } = require('lodash');
const { consume } = require('../../../../amqp');
const {
  rabbit: { options },
} = require('../../../../config');

const startRabbitHandler = async (argv) => {
  try {
    const connectBy = argv.url ?? pick(argv, Object.keys(options));
    return consume(argv.queue, connectBy);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { startRabbitHandler };
