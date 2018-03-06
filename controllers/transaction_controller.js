var db = require("../models");

app.get('/api/transactions', function (req, res) {
  let query = {};
  if (req.query.customer_id) {
    query.CustomerId = req.query.customer_id;
  }

  db.Transaction.findAll({
    where: query,
    include: [db.Author]
  }).then(function (dbt) {
    res.json(dbt);
  });
});

app.post('/api/post/:id', function (req, res) {
  db.Transaction.create(req.body).then(function (dbt) {
    res.json(dbt);
  });
});
