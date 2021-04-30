'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    checkIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    checkOut: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    children: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    infants: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    numOfGuests: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, { foreignKey: 'userId' })
    Booking.belongsTo(models.Spot, { foreignKey: 'spotId' })
  };

  Booking.getBookings = async function(userId) {
    const { Spot } = require('../models')
    const bookings = await Booking.findAll({
      where: {
        userId: {
          [Op.eq]: userId
        }
      },
      include: [Spot]
    });
    return bookings;
  }

  Booking.addBooking = async function(bookingData) {
    let newBooking = await Booking.create(bookingData);
    return newBooking;
  }

  Booking.updateBooking = async function(bookingData, id) {
    const { Spot } = require('../models')
    let spot = await Spot.findByPk(bookingData.spotId)

    let booking = await Booking.findByPk(id)
    let updatedBooking = await booking.update(bookingData)
  
    updatedBooking.dataValues.Spot = spot
    return updatedBooking
  }

  Booking.deleteBooking = async function(id) {
    const booking = await Booking.findByPk(id)
    await booking.destroy()
  }
  return Booking;
};