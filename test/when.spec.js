'use strict'

var self = this

describe('when', function () {
  var promisey
  var $rootScope

  beforeEach(module('app'))
  beforeEach(inject(function(_$rootScope_, _promisey_) {
    promisey = _promisey_
    $rootScope = _$rootScope_
  }))

  it('should give cakes', function (done) {
    promisey.cakey()
      .then(function (cake) {
        expect(cake).toBe('brownie')
      })
      .catch(self.fail.bind())
      .finally(done)
    $rootScope.$apply()
  })

  it('should give fruit', function (done) {
    promisey.fruity()
      .then(function (cake) {
        // XXX: does not resolve
        expect(cake).toBe('apple')
      })
      .catch(self.fail.bind())
      .finally(done)
    $rootScope.$apply()
  })
})
