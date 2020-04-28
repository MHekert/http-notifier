const { appendExamples } = require('./appendExamples');
const { addCommend } = require('./addCommend');
const { connectBy } = require('./connectBy');
const { getNotificationParams } = require('./getNotificationParams');
const { checkRabbitParamsCollision } = require('./checkRabbitParamsCollision');

module.exports = {
	addCommend,
	appendExamples,
	connectBy,
	getNotificationParams,
	checkRabbitParamsCollision,
};
