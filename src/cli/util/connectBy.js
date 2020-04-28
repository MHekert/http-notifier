const { pick } = require('lodash');
const {
	rabbit: { options },
} = require('../../../config');

const connectBy = (argv) => argv.url ?? pick(argv, Object.keys(options));

module.exports = {
	connectBy,
};
