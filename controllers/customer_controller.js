const db = require('../models');


module.exports = function (app) {
  app.get('/api/customers', (req, res) => {
    db.Customer.findAll({}).then((data) => {
      res.json(data);
    });
  });

  app.get('/api/customer', (req, res) => {
    console.log('1');
    db.Customer.find({
      where: {
        id: 1
      }
    }).then((data) => {
      res.json(data);
    });
  });

  app.post('/api/customer', (req, res) => {

  });

  app.put('/api/customer', (req, res) => {

  });

  app.delete('/api/customer', (req, res) => {

  });
};
