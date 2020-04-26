const { start } = require('../../../../http/server');

const startHttpHandler = async (argv) => {
	try {
		start(argv.port);
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = { startHttpHandler };
