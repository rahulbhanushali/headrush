var HeadRush = require('../')
var test = require('tape').test

test('should throw error when initialized without options', function (t) {
  t.plan(1)

  try {
    var headRush = new HeadRush()
    headRush.stun({})
  } catch (exception) {
    t.equal('Initial dependencies need to be present to stun', exception.message)
  }
})
