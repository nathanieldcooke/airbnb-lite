'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op
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
    },
    price: {
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

  Spot.findSpot = async function(id) {
    const { Review, Booking, User, Image } = require('../models')
    // id = Number(id)
    return await Spot.findByPk(id, {
      // include: [Review, Booking, User, Image]
      include: [
        {
          model: Review,
          include: User
        },
        {
          model: Booking
        },
        {
          model: User
        },
        {
          model: Image
        }
      ]
    })
  }

  Spot.getAllSpots = async function() {
    const { Review, Booking, User, Image } = require('../models')
    // may load users/owners of spots later.
    return await Spot.findAll({
      include: [Review, Booking, User, Image]
    })
  }

  Spot.orderByTop = async function () {
    const { Review, Booking, User, Image } = require('../models')
    // may load users/owners of spots later.
    return await Spot.findAll({
      order: [['rating', 'DESC']],
      include: [Review, Booking, User, Image],
    })
  }

  Spot.orderByBudget = async function () {
    const { Review, Booking, User, Image } = require('../models')
    // may load users/owners of spots later.
    return await Spot.findAll({
      order: [['price', 'ASC']],
      include: [Review, Booking, User, Image]
    })
  }

  Spot.getChildFriendly = async function () {
    const { Review, Booking, User, Image } = require('../models')
    return await Spot.findAll({
      where: {
        childrenAllowed: {
          [Op.eq]: true
        }
      },
      include: [Review, Booking, User, Image]
    })
  }

  Spot.getInfantsFriendly = async function () {
    const { Review, Booking, User, Image } = require('../models')
    return await Spot.findAll({
      where: {
        infantsAllowed: {
          [Op.eq]: true
        }
      },
      include: [Review, Booking, User, Image]
    })
  }

  Spot.getDateAvailable = async function (date) {
    date = new Date(date)
    console.log('This Is Date: ', date)

    let spots = await Spot.getAllSpots()

    spots = spots.filter(spot => {
      // checks is some(any) bookings for this spot, are takening the desired date
      return !spot.Bookings.some(booking => {
        const dtime = date.getTime()
        // this means that the booking alread takes the desired date
        return (dtime > booking.checkIn.getTime() - 86400000 && dtime < booking.checkOut.getTime()) ? true : false
      })
    })

    return spots
  }

  Spot.getHaveNumOfGuests = async function (num) {
    const { Review, Booking, User, Image } = require('../models')
    return await Spot.findAll({
      where: {
        maxGuests: {
          [Op.gte]: num
        }
      },
      include: [Review, Booking, User, Image]
    })
  } 

  return Spot;
};