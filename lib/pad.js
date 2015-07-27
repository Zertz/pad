var _ = require('lodash')

module.exports = function pad (input, options, cb) {
  if (!_.isString(input) && !_.isNumber(input)) {
    return cb(new Error('input must be a string or number'))
  }

  if (!_.isString(options.with) && !_.isNumber(options.with)) {
    return cb(new Error('options.with must be a string or number'))
  }

  if (!_.isNumber(options.length)) {
    return cb(new Error('options.length must be a number'))
  }

  var output = '' + input

  for (var i = output.length; i < options.length; i++) {
    output = options.with + output
  }

  return cb(null, output)
}
