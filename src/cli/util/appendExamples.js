const { get, chunk, flatMapDeep } = require('lodash');
const { examples } = require('../options');

const retrivePairs = (array) => {
	const flatArray = flatMapDeep(array, Object.values);
	return chunk(flatArray, 2);
};

const appendByKey = (yargs, key) =>
	retrivePairs(get(examples, key)).forEach((example) => yargs.example(...example));

const appendAll = (yargs) => {
	retrivePairs(examples).forEach((example) => yargs.example(...example));
};

const appendExamples = (yargs, key) => (key ? appendByKey(yargs, key) : appendAll(yargs));

module.exports = { appendExamples };
