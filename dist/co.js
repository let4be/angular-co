"use strict";
angular.module('angular-co', []).factory('co', ["$q", "$rootScope", "$exceptionHandler", function($q, $rootScope, $exceptionHandler) {
  var createGeneratorProxy = (function(gen) {
    return $traceurRuntime.initGeneratorFunction(function $__2() {
      var $__3,
          err;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $ctx.pushTry(7, 8);
              $ctx.state = 10;
              break;
            case 10:
              $ctx.state = 2;
              return gen;
            case 2:
              $__3 = $ctx.sent;
              $ctx.state = 4;
              break;
            case 4:
              $ctx.returnValue = $__3;
              $ctx.state = 8;
              $ctx.finallyFallThrough = -2;
              break;
            case 6:
              $ctx.popTry();
              $ctx.state = 8;
              $ctx.finallyFallThrough = -2;
              break;
            case 7:
              $ctx.popTry();
              err = $ctx.storedException;
              $ctx.state = 13;
              break;
            case 13:
              $exceptionHandler(err);
              throw err;
              $ctx.state = 8;
              $ctx.finallyFallThrough = -2;
              break;
            case 8:
              $ctx.popTry();
              $ctx.state = 19;
              break;
            case 19:
              $rootScope.$apply();
              $ctx.state = 17;
              break;
            case 17:
              $ctx.state = $ctx.finallyFallThrough;
              break;
            default:
              return $ctx.end();
          }
      }, $__2, this);
    });
  });
  var co = function(gen) {
    var deferred = $q.defer();
    coJS(createGeneratorProxy(gen)).then(function() {
      deferred.resolve.apply(deferred.resolve, arguments);
    }).catch(function(err) {
      deferred.reject(err);
    });
    return deferred.promise;
  };
  co.transform = function(gen, transform) {
    return co($traceurRuntime.initGeneratorFunction(function $__2() {
      var $__4,
          $__5;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $ctx.state = 2;
              return gen;
            case 2:
              $__4 = $ctx.sent;
              $ctx.state = 4;
              break;
            case 4:
              $__5 = transform($__4);
              $ctx.state = 6;
              break;
            case 6:
              $ctx.returnValue = $__5;
              $ctx.state = -2;
              break;
            default:
              return $ctx.end();
          }
      }, $__2, this);
    }));
  };
  co.each = function(object, mapGen) {
    return co($traceurRuntime.initGeneratorFunction(function $__2() {
      var i,
          $__0,
          $__1,
          k;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $ctx.state = (angular.isArray(object)) ? 6 : 16;
              break;
            case 6:
              i = 0;
              $ctx.state = 7;
              break;
            case 7:
              $ctx.state = (i < object.length) ? 1 : -2;
              break;
            case 4:
              i++;
              $ctx.state = 7;
              break;
            case 1:
              $ctx.state = 2;
              return mapGen(object[i], i, object);
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            case 16:
              $ctx.state = (angular.isObject(object)) ? 15 : -2;
              break;
            case 15:
              $__0 = Object.keys(object)[$traceurRuntime.toProperty(Symbol.iterator)]();
              $ctx.state = 11;
              break;
            case 11:
              $ctx.state = (!($__1 = $__0.next()).done) ? 12 : -2;
              break;
            case 12:
              k = $__1.value;
              $ctx.state = 13;
              break;
            case 13:
              $ctx.state = 9;
              return mapGen(object[k], k, object);
            case 9:
              $ctx.maybeThrow();
              $ctx.state = 11;
              break;
            default:
              return $ctx.end();
          }
      }, $__2, this);
    }));
  };
  co.map = function(object, mapGen, init) {
    if (!object)
      return init;
    return co($traceurRuntime.initGeneratorFunction(function $__2() {
      var r,
          i,
          $__0,
          $__1,
          k;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $ctx.state = (angular.isArray(object)) ? 8 : 20;
              break;
            case 8:
              r = [];
              $ctx.state = 9;
              break;
            case 9:
              i = 0;
              $ctx.state = 7;
              break;
            case 7:
              $ctx.state = (i < object.length) ? 1 : 5;
              break;
            case 4:
              i++;
              $ctx.state = 7;
              break;
            case 1:
              $ctx.state = 2;
              return mapGen(object[i], i, object);
            case 2:
              r[i] = $ctx.sent;
              $ctx.state = 4;
              break;
            case 20:
              $ctx.state = (angular.isObject(object)) ? 18 : 5;
              break;
            case 18:
              r = {};
              $ctx.state = 19;
              break;
            case 19:
              $__0 = Object.keys(object)[$traceurRuntime.toProperty(Symbol.iterator)]();
              $ctx.state = 13;
              break;
            case 13:
              $ctx.state = (!($__1 = $__0.next()).done) ? 14 : 5;
              break;
            case 14:
              k = $__1.value;
              $ctx.state = 15;
              break;
            case 15:
              $ctx.state = 11;
              return mapGen(object[k], k, object);
            case 11:
              r[k] = $ctx.sent;
              $ctx.state = 13;
              break;
            case 5:
              $ctx.returnValue = r;
              $ctx.state = -2;
              break;
            default:
              return $ctx.end();
          }
      }, $__2, this);
    }));
  };
  co.reduce = function(object, reduceGen, init) {
    if (!object)
      return init;
    return co($traceurRuntime.initGeneratorFunction(function $__2() {
      var i,
          $__0,
          $__1,
          k;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $ctx.state = (angular.isArray(object)) ? 6 : 16;
              break;
            case 6:
              i = 0;
              $ctx.state = 7;
              break;
            case 7:
              $ctx.state = (i < object.length) ? 1 : 5;
              break;
            case 4:
              i++;
              $ctx.state = 7;
              break;
            case 1:
              $ctx.state = 2;
              return reduceGen(init, object[i], i, object);
            case 2:
              init = $ctx.sent;
              $ctx.state = 4;
              break;
            case 16:
              $ctx.state = (angular.isObject(object)) ? 15 : 5;
              break;
            case 15:
              $__0 = Object.keys(object)[$traceurRuntime.toProperty(Symbol.iterator)]();
              $ctx.state = 11;
              break;
            case 11:
              $ctx.state = (!($__1 = $__0.next()).done) ? 12 : 5;
              break;
            case 12:
              k = $__1.value;
              $ctx.state = 13;
              break;
            case 13:
              $ctx.state = 9;
              return reduceGen(init, object[k], k, object);
            case 9:
              init = $ctx.sent;
              $ctx.state = 11;
              break;
            case 5:
              $ctx.returnValue = init;
              $ctx.state = -2;
              break;
            default:
              return $ctx.end();
          }
      }, $__2, this);
    }));
  };
  co.wrap = function(gen) {
    var coFn = coJS.wrap(createGeneratorProxy(gen));
    return function() {
      var deferred = $q.defer();
      coFn.apply(coFn, arguments).then(function() {
        deferred.resolve.apply(deferred.resolve, arguments);
      }).catch(function(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    };
  };
  return co;
}]);
//# sourceURL=co.js