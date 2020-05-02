const { consume } = require('./consumer');
const { publish } = require('./publisher');
const { sendToQueue } = require('./sendToQueue');

module.exports = {
	consume,
	publish,
	sendToQueue,
};
