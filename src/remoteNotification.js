
const axios = require('axios');

const remoteNotification = async (remote, options) => {
	try {
		const response = await axios.post(remote, options)
		const data = response.data;
    if (!data.hasOwnProperty('success'))
			return { success: false, error: data};
    return data;
	} catch(error) {
		return { success: false, error: error.message};
	}
}

module.exports = remoteNotification;