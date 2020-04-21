const yargs = require('yargs');
const handler = require('./handler');

const { argv } = yargs
	.usage('Usage: $0 <command> [options]')
	.command('notify', 'Show native desktop notification')
	.example('$0 notify -m "hello there" -u critical', 'Shows critical notification')
	.describe('message', 'notification\'s message')
	.describe('title', 'notification\'s title')
	.describe('urgency', 'notification\'s urgency')
	.describe('remote', 'URL to send notifcation on')
	.describe('timeout', 'notification\'s timeout in miliseconds')
	.nargs('msg', 1)
	.nargs('title', 1)
	.nargs('urgency', 1)
	.nargs('remote', 1)
	.nargs('timeout', 1)
	.choices('urgency', ['low', 'normal', 'critical'])
	.demandOption(['msg'])
	.help('h')
	.alias('h', 'help')
	.alias('v', 'version')
	.alias('m', ['message', 'msg'])
	.alias('u', 'urgency')
	.alias('t', ['timeout', 'expire-time'])
	.epilog(`copyright 2019-${new Date().getFullYear()}`);

handler(argv);
