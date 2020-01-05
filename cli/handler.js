const { pick } = require('lodash');
const acceptedOptions = require('./options');
const notify = require('../src/notify');
const remoteNotification = require('../src/remoteNotification');


const handler = async argv => {
	const { remote } = argv;
	const options = pick(argv, acceptedOptions);
	let response;

	if (remote) {
		response = await remoteNotification(remote, options);
	} else {
		response = await notify(options);
	}
	const { error } = response;
	if (error) return error;
	return response.success;
};

module.exports = handler;
