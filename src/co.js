angular.module('angular-co', []).factory('co', function($q, $rootScope, $exceptionHandler) {
	let createGeneratorProxy = (gen) => function *() {
		try {
			return yield gen;
		} catch (err) {
			$exceptionHandler(err);

			throw err;
		} finally {
			$rootScope.$apply();
		}
	};

	let co = function (gen) {
		let deferred = $q.defer();

		coJS(createGeneratorProxy(gen))
			.then(function () {
				deferred.resolve.apply(deferred.resolve, arguments);
			})
			.catch(function (err){
				deferred.reject(err);
			});

		return deferred.promise;
	};

	co.def = (gen, def) => co(function *() {
		try {
			return yield gen;
		} catch (err) {
			return angular.isFunction(def) ? def(err) : def;
		}
	});

	co.transform = (gen, transform) => co(function *(){
		return transform(yield gen);
	});

	co.each = (object, mapGen) => co(function *() {
		if (angular.isArray(object)) {
			for (let i = 0; i < object.length; i++) {
				yield mapGen(object[i], i, object);
			}
		} else if (angular.isObject(object)) {
			for (let k of Object.keys(object)) {
				yield mapGen(object[k], k, object);
			}
		}
	});

	co.map = (object, mapGen, init) => {
		if (!object)
			return init;

		return co(function *() {
			let r;
			if (angular.isArray(object)) {
				r = [];
				for (let i = 0; i < object.length; i++) {
					r[i] = yield mapGen(object[i], i, object);
				}
			} else if (angular.isObject(object)) {
				r = {};
				for (let k of Object.keys(object)) {
					r[k] = yield mapGen(object[k], k, object);
				}
			}
			return r;
		});
	};

	co.reduce = (object, reduceGen, init) => {
		if (!object)
			return init;

		return co(function *() {
			if (angular.isArray(object)) {
				for (let i = 0; i < object.length; i++) {
					init = yield reduceGen(init, object[i], i, object);
				}
			} else if (angular.isObject(object)) {
				for (let k of Object.keys(object)) {
					init = yield reduceGen(init, object[k], k, object);
				}
			}
			return init;
		});
	};

	return co;
});