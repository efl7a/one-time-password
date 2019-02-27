const admin = require('firebase-admin');

module.exports = function(req, res) {
  if (!req.body.phone) {
    res.send({ success: false})
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');

  admin.auth().getUser(phone)
    .then(() => res.send({ success: true }))
    .catch(() => res.send({ success: false }))
}
