'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op
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

  StayedAtHistory.findAllOfUsersVisitedSpots = async function(userId) {
    const { Spot } = require('../models')
    const spotsStayedAt = await StayedAtHistory.findAll({
      where: {
        userId: {
          [Op.eq]: userId
        }
      },
      include: [Spot]
    });

    return spotsStayedAt
  }
  return StayedAtHistory;
};