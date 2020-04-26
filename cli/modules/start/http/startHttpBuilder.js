const { appendExamples } = require('../../../util');
const { http } = require('../../../../config');

const startHttpBuilder = (yargs) => {
	yargs.options({
		p: {
			alias: 'port',
			describe: 'Listener port',
			type: 'number',
			default: http.port,
		},
	});

	appendExamples(yargs, 'start.http');
};

module.exports = { startHttpBuilder };
