var expect = require('chai').expect

module.exports = (function () {
  var pad = require('../index')

  describe('pad', function () {
    it('should throw an error when called without input', function () {
      expect(function () {
        pad()
      }).to.throw("Couldn't pad input, input must be a string or number!")
    })

    it('should throw an error when called without padWith', function () {
      expect(function () {
        pad('input')
      }).to.throw("Couldn't pad input, padWith must be a string or number!")
    })

    it('should throw an error when called without desiredLength', function () {
      expect(function () {
        pad('input', '8')
      }).to.throw("Couldn't pad input, desiredLength must be a number!")
    })

    it("should return '888input' when called with 'input', '8', 8", function () {
      expect(pad('input', '8', 8)).to.be.equal('888input')
    })
  })
})()
