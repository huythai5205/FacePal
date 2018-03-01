const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const cors = require('cors');

const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());


require('./controllers/customer_controller.js')(app.use(cors()));

db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
  });
});
