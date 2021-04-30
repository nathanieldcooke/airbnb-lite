'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    cleanliness: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
    communication: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
    checkIn: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
    accuracy: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
    location: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
    reviewContent: {
      type: DataTypes.TEXT,
      allowNull: false
  },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
  }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Spot, { foreignKey: 'spotId' })
    Review.belongsTo(models.User, { foreignKey: 'userId' })
  };

  Review.findAllOfUsersReviews = async function(userId) {
    const { Spot } = require('../models')
    const reviews = await Review.findAll({
      where: {
        userId: {
          [Op.eq]: userId
        }
      },
      include: [Spot]
    });

    return reviews
  }

  return Review;
};