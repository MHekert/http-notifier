const { pick } = require('lodash');
const { acceptedOptions } = require('../options');

const getNotificationParams = (argv) => pick(argv, acceptedOptions);

module.exports = {
	getNotificationParams,
};
