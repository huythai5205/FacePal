const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'FacePal');

module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    DOB: DataTypes.STRING,
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      set(val) {
        hmac.update(val);
        this.setDataValue('password', hmac.digest('hex'));
      }
    },
    photo: DataTypes.STRING
  });
  return Customer;
}
