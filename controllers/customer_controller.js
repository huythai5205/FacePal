const db = require('../models');
const bcrypt = require('bcrypt');

module.exports = function (app) {

  app.get('/api/customers', (req, res) => {
    db.Customer.findAll({
      include: [db.Transaction]
    }).then((data) => {
      res.json(data);
    });
  });

  app.get('/api/customer/:emailPassword', (req, res) => {
    const temp = req.params.emailPassword.split("+");
    const email = temp[0];
    const password = temp[1];
    db.Customer.find({
      where: {
        email: email
      },
      include: [db.Transaction]
    }).then((data) => {
      bcrypt.compare(password, data.password, function (err, bRes) {
        if (err) console.log(err);
        bRes ? res.json(data) : res.json();
      });
    });
  });

  app.get('/api/profile/:email', (req, res) => {
    db.Customer.find({
      where: {
        email: req.params.email
      },
      include: [db.Transaction]
    }).then((data) => {
      res.json(data);
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

  app.put('/api/updateCustomer', (req, res) => {
    console.log("updating customer", req.body);
    db.Customer.update(req.body).then((data) => {
      res.json(data);
    });
  });

  app.put('/api/addFunds', (req, res) => {
    console.log("updating customer", req.body);
    db.Customer.findOne({
      where: {
        email: req.body.email
      }
    }).then((data) => {
      data.increment('availableFunds', {
        by: req.body.amount
      });
      res.json(data);
    });
  });

  app.put('/api/subtractFunds', (req, res) => {
    console.log("updating customer", req.body);
    db.Customer.findOne({
      where: {
        email: req.body.email
      }
    }).then((data) => {
      data.decrement('availableFunds', {
        by: req.body.amount
      });
      res.json(data);
    });
  });
};
