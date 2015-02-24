"use strict";

angular.module("angular-co", []).factory("co", ["$q", "$rootScope", "$exceptionHandler", function ($q, $rootScope, $exceptionHandler) {
  var createGeneratorProxy = function (gen) {
    return regeneratorRuntime.mark(function callee$2$0() {
      return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.prev = 0;
            context$3$0.next = 3;
            return gen;
          case 3:
            return context$3$0.abrupt("return", context$3$0.sent);
          case 6:
            context$3$0.prev = 6;
            context$3$0.t0 = context$3$0["catch"](0);
            $exceptionHandler(context$3$0.t0);

            throw context$3$0.t0;
          case 10:
            context$3$0.prev = 10;
            $rootScope.$apply();
            context$3$0.finish(10);

          case 13:
          case "end":
            return context$3$0.stop();
        }
      }, callee$2$0, this, [[0, 6, 10]]);
    });
  };

  var co = function (gen) {
    var deferred = $q.defer();

    coJS(createGeneratorProxy(gen)).then(function () {
      deferred.resolve.apply(deferred.resolve, arguments);
    })["catch"](function (err) {
      deferred.reject(err);
    });

    return deferred.promise;
  };

  co.def = function (gen, def) {
    return co(regeneratorRuntime.mark(function callee$2$0() {
      return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.prev = 0;
            context$3$0.next = 3;
            return gen;
          case 3:
            return context$3$0.abrupt("return", context$3$0.sent);
          case 6:
            context$3$0.prev = 6;
            context$3$0.t1 = context$3$0["catch"](0);
            return context$3$0.abrupt("return", def(context$3$0.t1));
          case 9:
          case "end":
            return context$3$0.stop();
        }
      }, callee$2$0, this, [[0, 6]]);
    }));
  };

  co.transform = function (gen, transform) {
    return co(regeneratorRuntime.mark(function callee$2$0() {
      return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return gen;
          case 2:
            context$3$0.t2 = context$3$0.sent;
            return context$3$0.abrupt("return", transform(context$3$0.t2));
          case 4:
          case "end":
            return context$3$0.stop();
        }
      }, callee$2$0, this);
    }));
  };

  co.each = function (object, mapGen) {
    return co(regeneratorRuntime.mark(function callee$2$0() {
      var i, _iterator, _step, k;
      return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!angular.isArray(object)) {
              context$3$0.next = 10;
              break;
            }
            i = 0;
          case 2:
            if (!(i < object.length)) {
              context$3$0.next = 8;
              break;
            }
            context$3$0.next = 5;
            return mapGen(object[i], i, object);
          case 5:
            i++;
            context$3$0.next = 2;
            break;
          case 8:
            context$3$0.next = 18;
            break;
          case 10:
            if (!angular.isObject(object)) {
              context$3$0.next = 18;
              break;
            }
            _iterator = Object.keys(object)[Symbol.iterator]();
          case 12:
            if ((_step = _iterator.next()).done) {
              context$3$0.next = 18;
              break;
            }
            k = _step.value;
            context$3$0.next = 16;
            return mapGen(object[k], k, object);
          case 16:
            context$3$0.next = 12;
            break;
          case 18:
          case "end":
            return context$3$0.stop();
        }
      }, callee$2$0, this);
    }));
  };

  co.map = function (object, mapGen, init) {
    if (!object) return init;

    return co(regeneratorRuntime.mark(function callee$2$0() {
      var r, i, _iterator2, _step2, k;
      return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!angular.isArray(object)) {
              context$3$0.next = 12;
              break;
            }
            r = [];
            i = 0;
          case 3:
            if (!(i < object.length)) {
              context$3$0.next = 10;
              break;
            }
            context$3$0.next = 6;
            return mapGen(object[i], i, object);
          case 6:
            r[i] = context$3$0.sent;
          case 7:
            i++;
            context$3$0.next = 3;
            break;
          case 10:
            context$3$0.next = 22;
            break;
          case 12:
            if (!angular.isObject(object)) {
              context$3$0.next = 22;
              break;
            }
            r = {};
            _iterator2 = Object.keys(object)[Symbol.iterator]();
          case 15:
            if ((_step2 = _iterator2.next()).done) {
              context$3$0.next = 22;
              break;
            }
            k = _step2.value;
            context$3$0.next = 19;
            return mapGen(object[k], k, object);
          case 19:
            r[k] = context$3$0.sent;
          case 20:
            context$3$0.next = 15;
            break;
          case 22:
            return context$3$0.abrupt("return", r);
          case 23:
          case "end":
            return context$3$0.stop();
        }
      }, callee$2$0, this);
    }));
  };

  co.reduce = function (object, reduceGen, init) {
    if (!object) return init;

    return co(regeneratorRuntime.mark(function callee$2$0() {
      var i, _iterator3, _step3, k;
      return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!angular.isArray(object)) {
              context$3$0.next = 11;
              break;
            }
            i = 0;
          case 2:
            if (!(i < object.length)) {
              context$3$0.next = 9;
              break;
            }
            context$3$0.next = 5;
            return reduceGen(init, object[i], i, object);
          case 5:
            init = context$3$0.sent;
          case 6:
            i++;
            context$3$0.next = 2;
            break;
          case 9:
            context$3$0.next = 20;
            break;
          case 11:
            if (!angular.isObject(object)) {
              context$3$0.next = 20;
              break;
            }
            _iterator3 = Object.keys(object)[Symbol.iterator]();
          case 13:
            if ((_step3 = _iterator3.next()).done) {
              context$3$0.next = 20;
              break;
            }
            k = _step3.value;
            context$3$0.next = 17;
            return reduceGen(init, object[k], k, object);
          case 17:
            init = context$3$0.sent;
          case 18:
            context$3$0.next = 13;
            break;
          case 20:
            return context$3$0.abrupt("return", init);
          case 21:
          case "end":
            return context$3$0.stop();
        }
      }, callee$2$0, this);
    }));
  };

  return co;
}]);