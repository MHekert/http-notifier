const { pick } = require('lodash');
const { acceptedOptions } = require('../../options');
const notify = require('../../../src/notify');

const localHandler = async (argv) => {
	try {
		const options = pick(argv, acceptedOptions);
		const response = await notify(options);
		console.log(response); // eslint-disable-line no-console
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = { localHandler };
