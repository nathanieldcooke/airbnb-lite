'use strict';

const booking = require("./booking");

module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    country: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    streetAddress: {
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    childrenAllowed: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
    },
    infantsAllowed: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
    },
    maxGuests: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
      default: 0,
    },
    bedrooms: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    beds: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    bathrooms: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT, 
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    minimumStay: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    }
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
    Spot.hasMany(models.Booking, { foreignKey: 'spotId' })
    Spot.hasMany(models.Review, { foreignKey: 'spotId' })
    Spot.hasMany(models.Image, { foreignKey: 'spotId' })
    Spot.hasMany(models.StayedAtHistory, { foreignKey: 'spotId' })
  };
  return Spot;
};