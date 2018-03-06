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
    availableFunds: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    }
  });

  Customer.associate = function (models) {
    Customer.hasMany(models.Transaction, {
      onDelete: "cascade"
    });
  }
  return Customer;
}
