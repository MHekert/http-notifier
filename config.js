module.exports = {
	timeoutSeconds: 10,
	iconPath: './assets/bell.svg',
	title: 'http-notifier',
	rabbit: {
		options: {
			protocol: 'amqp',
			hostname: 'localhost',
			port: 5672,
			username: 'guest',
			password: 'guest',
			locale: 'en_US',
			frameMax: 0,
			heartbeat: 0,
			vhost: '/',
		},
		queueNames: ['notifier'],
	},
	http: {
		port: 3000,
	},
};
