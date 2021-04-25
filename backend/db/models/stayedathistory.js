'use strict';
module.exports = (sequelize, DataTypes) => {
  const StayedAtHistory = sequelize.define('StayedAtHistory', {
    spotId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  StayedAtHistory.associate = function(models) {
    StayedAtHistory.belongsTo(models.Spot, { foreignKey: 'spotId' })
    StayedAtHistory.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return StayedAtHistory;
};