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
        expect(cake).to.be('brownie')
      })
      .finally(done)
    $rootScope.$apply()
  })

  it('should give fruit: SO', function () {
    return promisey.fruity()
      .then(function (cake) {
        expect(cake).to.be('apple')
      })
  })

  it('should give fruit: chai-as-promised', function () {
    return promisey.fruity()
      .then(function (cake) {
        cake.should.eventually.equal('hello')
      })
  })

  it('should give fruit: done variant', function (done) {
    promisey.fruity()
      .then(function (cake) {
        cake.should.equal('hello')
        done()
      })
  })
})
