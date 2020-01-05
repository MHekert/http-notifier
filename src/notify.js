const notifier = require('node-notifier');
const enrichOptions = require('./enrichOptions');

const notify = async options => {
	return new Promise((resolve, reject) => {
		notifier.notify(enrichOptions(options), (err, response, metadata) => {
			if (err) return reject(err);
			return resolve({ ...response });
		});
	});
};

module.exports = notify;
