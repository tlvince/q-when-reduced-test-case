'use strict'

angular.module('app', [])
  .service('promisey', function ($q) {
    this.cakey = function () {
      return $q.when('brownie')
    }
    this.fruity = function () {
      return $q.when(Promise.resolve('apple'))
    }
  })
