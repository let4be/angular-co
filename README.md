# angular-co
The ultimate generator based flow-control goodness for angular.js built using 

https://github.com/tj/co and https://github.com/6to5/6to5

to provide browser support for generators from angular.js

Ensure you have runtime.js included

Very basic example(borwserify/require.js):

  ```
  angular.module('test', []).controller('CtrlTest', function(co) {
    var sleep = require('co-sleep');
    co(function *() {
      yield sleep(1000);
      console.log('hey there, I've slept 1 second');
      yield sleep(2000);
      console.log('awake after 2 more seconds');
      return 'awesome';
    })
    // co wrapper returns a promise
    .then(state => {
      console.log('sleep has finished, state is', state);
    });
  });
  ```

this library also supports generator based reduce && map for arrays and object, please check the source code
