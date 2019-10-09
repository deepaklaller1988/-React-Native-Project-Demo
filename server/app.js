// const accountSid = 'ACbe0b388ca58323a7ba19e7083b7b2b2e';
// const authToken = 'cf573d91c507fec56b99fea2e40d7bdf';
// const client = require('twilio')(accountSid, authToken);

// client.verify.services('VAa9dab845f972a7744b071dfa5c4b51c7')
//              .verifications
//              .create({customCode: '867530',to: '+918770561079', channel: 'sms'})
//              .then(verification => console.log(verification));

            
var authy = require('authy')('xd1M4zGeyhJk4i0ixYpx788mx8YFXTb1');

authy.request_call('251886', function (err, res) {
  console.log(res);
});