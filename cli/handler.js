const { pick } = require('lodash');
const acceptedOptions = require('./options');
const notify = require('../src/notify');
const remoteNotification = require('./remoteNotification');

const handler = async (argv) => {
	try {
		const { remote } = argv;
		const options = pick(argv, acceptedOptions);
		const response = remote ? remoteNotification(remote, options) : notify(options);
		console.log(await response); // eslint-disable-line no-console
	} catch (error) {
		const message =
			error.response && error.response.data && error.response.data.error
				? error.response.data.error
				: error.message;
		console.error(message);
	}
};

module.exports = handler;
