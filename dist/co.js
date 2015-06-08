'use strict';

angular.module('angular-co', []).provider('co', function () {
	var self = this;

	self.coJS = null;

	self.$get = ["$q", "$rootScope", "$exceptionHandler", function ($q, $rootScope, $exceptionHandler) {
		var createGeneratorProxy = function createGeneratorProxy(gen) {
			return regeneratorRuntime.mark(function callee$3$0() {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							context$4$0.prev = 0;
							context$4$0.next = 3;
							return gen;

						case 3:
							return context$4$0.abrupt('return', context$4$0.sent);

						case 6:
							context$4$0.prev = 6;
							context$4$0.t0 = context$4$0['catch'](0);

							$exceptionHandler(context$4$0.t0);

							throw context$4$0.t0;

						case 10:
							context$4$0.prev = 10;

							$rootScope.$apply();
							return context$4$0.finish(10);

						case 13:
						case 'end':
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[0, 6, 10, 13]]);
			});
		};

		var co = function co(gen) {
			var deferred = $q.defer();

			self.coJS(createGeneratorProxy(gen)).then(function () {
				deferred.resolve.apply(deferred.resolve, arguments);
				$rootScope.$apply();
			})['catch'](function (err) {
				deferred.reject(err);
				$rootScope.$apply();
			});

			return deferred.promise;
		};

		co.def = function (gen, def) {
			return co(regeneratorRuntime.mark(function callee$3$0() {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							context$4$0.prev = 0;
							context$4$0.next = 3;
							return gen;

						case 3:
							return context$4$0.abrupt('return', context$4$0.sent);

						case 6:
							context$4$0.prev = 6;
							context$4$0.t0 = context$4$0['catch'](0);
							return context$4$0.abrupt('return', angular.isFunction(def) ? def(context$4$0.t0) : def);

						case 9:
						case 'end':
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[0, 6]]);
			}));
		};

		co.transform = function (gen, transform) {
			return co(regeneratorRuntime.mark(function callee$3$0() {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							context$4$0.next = 2;
							return gen;

						case 2:
							context$4$0.t0 = context$4$0.sent;
							return context$4$0.abrupt('return', transform(context$4$0.t0));

						case 4:
						case 'end':
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			}));
		};

		co.each = function (object, mapGen) {
			return co(regeneratorRuntime.mark(function callee$3$0() {
				var i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, k;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							if (!angular.isArray(object)) {
								context$4$0.next = 10;
								break;
							}

							i = 0;

						case 2:
							if (!(i < object.length)) {
								context$4$0.next = 8;
								break;
							}

							context$4$0.next = 5;
							return mapGen(object[i], i, object);

						case 5:
							i++;
							context$4$0.next = 2;
							break;

						case 8:
							context$4$0.next = 37;
							break;

						case 10:
							if (!angular.isObject(object)) {
								context$4$0.next = 37;
								break;
							}

							_iteratorNormalCompletion = true;
							_didIteratorError = false;
							_iteratorError = undefined;
							context$4$0.prev = 14;
							_iterator = Object.keys(object)[Symbol.iterator]();

						case 16:
							if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
								context$4$0.next = 23;
								break;
							}

							k = _step.value;
							context$4$0.next = 20;
							return mapGen(object[k], k, object);

						case 20:
							_iteratorNormalCompletion = true;
							context$4$0.next = 16;
							break;

						case 23:
							context$4$0.next = 29;
							break;

						case 25:
							context$4$0.prev = 25;
							context$4$0.t0 = context$4$0['catch'](14);
							_didIteratorError = true;
							_iteratorError = context$4$0.t0;

						case 29:
							context$4$0.prev = 29;
							context$4$0.prev = 30;

							if (!_iteratorNormalCompletion && _iterator['return']) {
								_iterator['return']();
							}

						case 32:
							context$4$0.prev = 32;

							if (!_didIteratorError) {
								context$4$0.next = 35;
								break;
							}

							throw _iteratorError;

						case 35:
							return context$4$0.finish(32);

						case 36:
							return context$4$0.finish(29);

						case 37:
						case 'end':
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[14, 25, 29, 37], [30,, 32, 36]]);
			}));
		};

		co.map = function (object, mapGen, init) {
			if (!object) return init;

			return co(regeneratorRuntime.mark(function callee$3$0() {
				var r, i, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, k;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							r = undefined;

							if (!angular.isArray(object)) {
								context$4$0.next = 13;
								break;
							}

							r = [];
							i = 0;

						case 4:
							if (!(i < object.length)) {
								context$4$0.next = 11;
								break;
							}

							context$4$0.next = 7;
							return mapGen(object[i], i, object);

						case 7:
							r[i] = context$4$0.sent;

						case 8:
							i++;
							context$4$0.next = 4;
							break;

						case 11:
							context$4$0.next = 42;
							break;

						case 13:
							if (!angular.isObject(object)) {
								context$4$0.next = 42;
								break;
							}

							r = {};
							_iteratorNormalCompletion2 = true;
							_didIteratorError2 = false;
							_iteratorError2 = undefined;
							context$4$0.prev = 18;
							_iterator2 = Object.keys(object)[Symbol.iterator]();

						case 20:
							if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
								context$4$0.next = 28;
								break;
							}

							k = _step2.value;
							context$4$0.next = 24;
							return mapGen(object[k], k, object);

						case 24:
							r[k] = context$4$0.sent;

						case 25:
							_iteratorNormalCompletion2 = true;
							context$4$0.next = 20;
							break;

						case 28:
							context$4$0.next = 34;
							break;

						case 30:
							context$4$0.prev = 30;
							context$4$0.t0 = context$4$0['catch'](18);
							_didIteratorError2 = true;
							_iteratorError2 = context$4$0.t0;

						case 34:
							context$4$0.prev = 34;
							context$4$0.prev = 35;

							if (!_iteratorNormalCompletion2 && _iterator2['return']) {
								_iterator2['return']();
							}

						case 37:
							context$4$0.prev = 37;

							if (!_didIteratorError2) {
								context$4$0.next = 40;
								break;
							}

							throw _iteratorError2;

						case 40:
							return context$4$0.finish(37);

						case 41:
							return context$4$0.finish(34);

						case 42:
							return context$4$0.abrupt('return', r);

						case 43:
						case 'end':
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[18, 30, 34, 42], [35,, 37, 41]]);
			}));
		};

		co.reduce = function (object, reduceGen, init) {
			if (!object) return init;

			return co(regeneratorRuntime.mark(function callee$3$0() {
				var i, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, k;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							if (!angular.isArray(object)) {
								context$4$0.next = 11;
								break;
							}

							i = 0;

						case 2:
							if (!(i < object.length)) {
								context$4$0.next = 9;
								break;
							}

							context$4$0.next = 5;
							return reduceGen(init, object[i], i, object);

						case 5:
							init = context$4$0.sent;

						case 6:
							i++;
							context$4$0.next = 2;
							break;

						case 9:
							context$4$0.next = 39;
							break;

						case 11:
							if (!angular.isObject(object)) {
								context$4$0.next = 39;
								break;
							}

							_iteratorNormalCompletion3 = true;
							_didIteratorError3 = false;
							_iteratorError3 = undefined;
							context$4$0.prev = 15;
							_iterator3 = Object.keys(object)[Symbol.iterator]();

						case 17:
							if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
								context$4$0.next = 25;
								break;
							}

							k = _step3.value;
							context$4$0.next = 21;
							return reduceGen(init, object[k], k, object);

						case 21:
							init = context$4$0.sent;

						case 22:
							_iteratorNormalCompletion3 = true;
							context$4$0.next = 17;
							break;

						case 25:
							context$4$0.next = 31;
							break;

						case 27:
							context$4$0.prev = 27;
							context$4$0.t0 = context$4$0['catch'](15);
							_didIteratorError3 = true;
							_iteratorError3 = context$4$0.t0;

						case 31:
							context$4$0.prev = 31;
							context$4$0.prev = 32;

							if (!_iteratorNormalCompletion3 && _iterator3['return']) {
								_iterator3['return']();
							}

						case 34:
							context$4$0.prev = 34;

							if (!_didIteratorError3) {
								context$4$0.next = 37;
								break;
							}

							throw _iteratorError3;

						case 37:
							return context$4$0.finish(34);

						case 38:
							return context$4$0.finish(31);

						case 39:
							return context$4$0.abrupt('return', init);

						case 40:
						case 'end':
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[15, 27, 31, 39], [32,, 34, 38]]);
			}));
		};

		return co;
	}];

	return self;
});