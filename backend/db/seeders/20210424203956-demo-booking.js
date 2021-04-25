'use strict';
const faker = require("faker");
const { Spot, User } = require('../models')
module.exports = {

  up: async (queryInterface, Sequelize) => {

    // may equal min, will be less than max
    function getRandNumBetween(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    function addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }
      const bookingSeeds = [];

      const allUsers = await User.findAll();
      const allSpots = await Spot.findAll();

      const bookingsPerSpot = Math.floor(allUsers.length / allSpots.length);

      function generateBookings() {
        while(allSpots.length) {
          let spot = allSpots.pop();
          let i = 0;
          let days = 0;
          let date = null;
          while(i < bookingsPerSpot) {

            let user = allUsers.pop();

            if (user.id === spot.userId) continue;

            days = getRandNumBetween(days + 1, days + 14);
            date = addDays(new Date, days);
            let checkIn = date;

            days += getRandNumBetween(spot.minimumStay, 7);
            date = addDays(new Date, days);
            let checkOut = date;

            let children = spot.childrenAllowed;
            let infants = spot.infantsAllowed;
            let numOfGuests = getRandNumBetween(1, spot.maxGuests);
            let spotId = spot.id;
            let userId = user.id;

            bookingSeeds.push({
              checkIn, checkOut, children, infants,
              numOfGuests, spotId, userId
            });

            ++i;
          }
        }
      }

      generateBookings()

    return queryInterface.bulkInsert('Bookings', bookingSeeds, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
