const notificationOptions = {
	m: {
		describe: "notification's message",
		alias: ['message', 'msg'],
		demandOption: true,
	},
	u: {
		describe: "notification's urgency",
		alias: 'urgency',
		choices: ['low', 'normal', 'critical'],
	},
	title: {
		describe: "notification's title",
	},
	timeout: {
		describe: "notification's timeout in miliseconds",
		alias: ['timeout', 'expire-time'],
	},
};

module.exports = { notificationOptions };
