const request = require('./request');
const response = require('./response');

const schema = {
	...request,
	response,
};

module.exports = schema;
