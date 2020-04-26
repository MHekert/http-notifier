const addCommend = (yargs, command, description, builder, handler) =>
	yargs.command(command, description, builder, handler);

module.exports = { addCommend };
