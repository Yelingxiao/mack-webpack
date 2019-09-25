const loaderUtils = require('loader-utils');

module.exports = function (content) {
  const options = loaderUtils.getOptions(this);
  const result = content.replace('world', options.name);
  return result;
}