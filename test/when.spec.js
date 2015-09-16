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

  it('should give fruit', function () {
    return promisey.fruity()
      .then(function (cake) {
        expect(cake).toBe('passes-when-it-shouldnt')
      })
  })
})
