const examples = {
	local: [['$0 local -m "hello there" -u critical', 'Shows critical notification']],
	http: [
		[
			'$0 http -m "hello there" -u critical -url https://example.com:8080',
			'Shows critical notification over http',
		],
	],
	start: {
		http: [['$0 start http -p 8080', 'starts http server on port 8080']],
		rabbit: [['$0 start rabbit -q myqueue', 'starts consuming messages from queue named myqueue']],
	},
	rabbit: [
		[
			'$0 start publish -q myqueue -m "I might have published this a long time ago"',
			'publishes message to queue named myqueue',
		],
	],
};

module.exports = { examples };
