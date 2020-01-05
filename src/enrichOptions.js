const { type } = require('os');
const { join } = require('path');
const { iconPath, timeoutSeconds, title } = require('../config');

const timeoutByOs = timeout => type() === 'Linux' ? timeout * 1000 : timeout;

const enrichOptions = options => {
  const defaultOptions = {
    icon: join(__dirname, '../', iconPath),
    timeout: timeoutSeconds,
    title,
  };
  const newOptions = {...defaultOptions, ...options};
  const { timeout } = newOptions;
  return {...newOptions, timeout: timeoutByOs(timeout)};
};

module.exports = enrichOptions;