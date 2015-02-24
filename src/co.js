angular.module('angular-co', []).factory('co', function($q, $rootScope, $exceptionHandler) {
	var createGeneratorProxy = (gen) => function *() {
		try {
			return yield gen;
		} catch (err) {
			$exceptionHandler(err);

			throw err;
		} finally {
			$rootScope.$apply();
		}
	};

	var co = function (gen) {
		var deferred = $q.defer();

		coJS(createGeneratorProxy(gen))
			.then(function () {
				deferred.resolve.apply(deferred.resolve, arguments);
			})
			.catch(function (err){
				deferred.reject(err);
			});

		return deferred.promise;
	};

	co.def = function (gen, def) {
		return co(function *(){
			try {
				return yield gen;
			} catch (err) {
				return def(err);
			}
		});
	};

	co.transform = function (gen, transform) {
		return co(function *(){
			return transform(yield gen);
		});
	};

	co.each = function (object, mapGen) {
		return co(function *() {
			if (angular.isArray(object)) {
				for (var i = 0; i < object.length; i++) {
					yield mapGen(object[i], i, object);
				}
			} else if (angular.isObject(object)) {
				for (var k of Object.keys(object)) {
					yield mapGen(object[k], k, object);
				}
			}
		});
	};

	co.map = function (object, mapGen, init) {
		if (!object)
			return init;

		return co(function *() {
			var r;
			if (angular.isArray(object)) {
				r = [];
				for (var i = 0; i < object.length; i++) {
					r[i] = yield mapGen(object[i], i, object);
				}
			} else if (angular.isObject(object)) {
				r = {};
				for (var k of Object.keys(object)) {
					r[k] = yield mapGen(object[k], k, object);
				}
			}
			return r;
		});
	};

	co.reduce = function (object, reduceGen, init) {
		if (!object)
			return init;

		return co(function *() {
			if (angular.isArray(object)) {
				for (var i = 0; i < object.length; i++) {
					init = yield reduceGen(init, object[i], i, object);
				}
			} else if (angular.isObject(object)) {
				for (var k of Object.keys(object)) {
					init = yield reduceGen(init, object[k], k, object);
				}
			}
			return init;
		});
	};

	return co;
});