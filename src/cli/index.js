const yargs = require('yargs');
const { appendExamples } = require('./util');
const { commandBuilder } = require('./commandBuilder');

const buildCLI = () => {
	yargs.demandCommand(1, 1).usage('Usage: $0 <command> [options]');

	commandBuilder(yargs);
	appendExamples(yargs);
	return yargs.argv;
};

module.exports = { buildCLI };
