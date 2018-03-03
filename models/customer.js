module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    DOB: DataTypes.STRING,
    email: {
      type: DataTypes.STRING
    },
    password: DataTypes.STRING,
    photo: DataTypes.STRING,
    availableFunds: DataTypes.double,

  });
  return Customer;
}
