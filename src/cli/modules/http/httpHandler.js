const { getNotificationParams } = require('../../util');

const remoteNotification = require('../../../remoteNotification');

const httpHandler = async (argv) => {
	try {
		const options = pick(argv, acceptedOptions);
		const response = await remoteNotification(argv.url, getNotificationParams(options));
		console.log(response); // eslint-disable-line no-console
	} catch (error) {
		const message = error?.response?.data?.error || error.message;
		console.error(message);
	}
};

module.exports = { httpHandler };
