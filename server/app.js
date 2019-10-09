
            
var authy = require('authy')('service_ID');

authy.request_call('251886', function (err, res) {
  console.log(res);
});
