const { pick, isEqual } = require('lodash');
const { rabbit } = require('../../../config');

const checkRabbitParamsCollision = (argv) => {
	const defaultOptionKeys = Object.keys(rabbit.options);
	const suppliedOptions = pick(argv, defaultOptionKeys);

	if (isEqual(rabbit.options, suppliedOptions) && argv.url) {
		throw new Error(`url param collides with ${defaultOptionKeys.join(', ')}`);
	}

	return true;
};

module.exports = { checkRabbitParamsCollision };
