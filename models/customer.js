module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    photo: DataTypes.STRING,
    DOB: DataTypes.STRING
  });
  return Customer;
}
