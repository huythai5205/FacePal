module.exports = function (sequelize, DataTypes) {
  const Transaction = sequelize.define('Transaction', {
    sender: DataTypes.STRING,
    receiver: DataTypes.STRING,
    amount: DataTypes.DOUBLE
  });

  Transaction.associate = function (models) {
    Transaction.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Transaction;
}
