const axios = require('axios');

const remoteNotification = async (remote, options) => {
  const response = await axios.post(remote, options);
  return response?.data?.response;
};

module.exports = remoteNotification;
