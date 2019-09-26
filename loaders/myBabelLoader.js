const babel = require("babel-core")
const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  const result = babel.transform(source, options)
  console.log(result.code)
  return result.code
}