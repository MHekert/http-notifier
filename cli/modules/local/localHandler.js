const { getNotificationParams } = require('../../util');
const notify = require('../../../src/notify');

const localHandler = async (argv) => {
	try {
		const response = await notify(getNotificationParams(argv));
		console.log(response); // eslint-disable-line no-console
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = { localHandler };
