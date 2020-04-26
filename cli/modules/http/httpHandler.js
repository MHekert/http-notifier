const { pick } = require('lodash');
const { acceptedOptions } = require('../../options');
const remoteNotification = require('../../../src/remoteNotification');

const httpHandler = async (argv) => {
  try {
    const options = pick(argv, acceptedOptions);
    const response = await remoteNotification(argv.url, options);
    console.log(response); // eslint-disable-line no-console
  } catch (error) {
    const message = error?.response?.data?.error || error.message;
    console.error(message);
  }
};

module.exports = { httpHandler };
