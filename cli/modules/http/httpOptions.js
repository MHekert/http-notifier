const { notificationOptions } = require('../../options');

const httpOptions = {
	...notificationOptions,
	url: {
		describe: 'URL to send notifcation on',
		demandOption: true,
	},
};

module.exports = {
	httpOptions,
};
