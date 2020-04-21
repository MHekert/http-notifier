const notifier = require('node-notifier');
const enrichOptions = require('./enrichOptions');

const notify = async (options) =>
	new Promise((resolve, reject) => {
		notifier.notify(enrichOptions(options), (err, response, _metadata) => {
			if (err) return reject(err);
			return resolve(response);
		});
	});

module.exports = notify;
