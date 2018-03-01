const db = require('../models');


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
      res.json(data);
    });
  });

  app.post('/api/customer', (req, res) => {
    console.log("creating customer", req.body);
    db.Customer.create(req.body).then((data) => {
      res.json(data);
    });
  });

  app.put('/api/customer', (req, res) => {
    console.log("updating customer", req.body);
  });

  app.delete('/api/customer', (req, res) => {

  });


};
