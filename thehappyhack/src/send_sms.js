// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC10e7f54ae365aaa465e3318061de78d4';
const authToken = '27904e3e793880f1f847fdd6b7b1634f';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'hahahahha stupidddd <3',
     from: '+12673184059',
     to: '+16473554175'
   })
  .then(message => console.log(message.sid));