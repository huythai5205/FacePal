module.exports = function (sequelize, DataTypes) {
  const Transaction = sequelize.define('Transaction', {
    send_to: DataTypes.STRING,
    receive_from: DataTypes.STRING,
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
