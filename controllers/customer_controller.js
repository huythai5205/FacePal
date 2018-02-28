const db = require('../models');
const bcrypt = require('bcrypt');

module.exports = function (app) {

  app.get('/api/customers', (req, res) => {
    db.Customer.findAll({}).then((data) => {
      res.json(data);
    });
  });

  app.get('/api/customer/:emailPassword', (req, res) => {
    console.log('getting customer', req.params.emailPassword);
    const temp = req.params.emailPassword.split("+");
    const email = temp[0];
    const password = temp[1];
    db.Customer.find({
      where: {
        email: email
      }
    }).then((data) => {
      bcrypt.compare(password, data.password, function (err, res) {
        if (err) console.log(err);
        res ? console.log("you're logged in") : console.log("Invalid");
      });
    });
  });

  app.post('/api/customer', (req, res) => {
    console.log("creating customer", req.body);
    bcrypt.genSalt(11, function (err, salt) {
      if (err) console.log(err);

      bcrypt.hash(req.body.password, salt, function (err, hash) {

        if (err) throw err;
        req.body.password = hash;
        db.Customer.create(req.body).then((data) => {
          res.json(data);
        });
      });
    });
  });

  app.put('/api/customer', (req, res) => {
    console.log("updating customer", req.body);

  });

  app.delete('/api/customer', (req, res) => {

  });


};
