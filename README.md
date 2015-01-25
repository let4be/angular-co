# angular-co
The ultimate generator based flow-control goodness for angular.js built using 

https://github.com/tj/co

and

https://github.com/google/traceur-compiler

to provide browser support for generators

Ensure you have traceur-runtime.js included in order this to work

Very basic example(borwserify/require.js):

  ```
  angular.module('test', []).controller('CtrlTest', function(co) {
    var sleep = require('co-sleep');
    co(function *() {
      yield sleep(1000);
    })
    .then(() => {
      console.log('sleep finished');
    });
  });
  ```

this library also supports generator based reduce/map for arrays and object, please check source code.
