const admin = require('firebase-admin');

module.exports = function(req, res) {
  // just echoing back the request we are sending to make sure connection is working.
   // res.send(req.body);

   //Verify the user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }
   //Format the number to remove symbols
   const phone = String(req.body.phone).replace(/[^\d]/g, '');

   //Validate phone number. How to do this other than length of number?

   //Create a new user account using that phone number. It is an asyncronous request.
   admin.auth().createUser({ uid: phone})
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));
   //Respond to the user request, saying the account was made
}
