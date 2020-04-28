const { notificationOptions } = require('../../options');
const { appendExamples } = require('../../util');

const localBuilder = (yargs) => {
	yargs.options(notificationOptions);
	return appendExamples(yargs, 'local');
};

module.exports = { localBuilder };
