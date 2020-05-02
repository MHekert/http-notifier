const { rabbit } = require('../../../config');

const rabbitConnectionOptions = {
	p: {
		alias: 'port',
		describe: "RabbitMQ's port",
		type: 'number',
		default: rabbit.options.port,
	},
	url: {
		descibe: "RabbitMQ's url",
		type: 'string',
	},
	password: {
		descibe: 'Password',
		default: rabbit.options.password,
		type: 'string',
	},
	username: {
		descibe: 'Username',
		default: rabbit.options.username,
		type: 'string',
	},
	protocol: {
		descibe: 'protocol',
		default: rabbit.options.protocol,
		type: 'string',
	},
	hostname: {
		descibe: 'hostname',
		default: rabbit.options.hostname,
		type: 'string',
	},
	locale: {
		descibe: 'locale',
		default: rabbit.options.locale,
		type: 'string',
	},
	vhost: {
		descibe: 'vhost',
		default: rabbit.options.vhost,
		type: 'string',
	},
	frameMax: {
		descibe: 'frameMax',
		default: rabbit.options.frameMax,
		type: 'number',
	},
	heartbeat: {
		descibe: 'heartbeat',
		default: rabbit.options.heartbeat,
		type: 'number',
	},
};

module.exports = { rabbitConnectionOptions };
