'use strict';
const { Spot, User } = require('../models')


module.exports = {
  up: async (queryInterface, Sequelize) => {

    // may equal min, will be less than max
    function getRandNumBetween(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    
    const stayedAtHistorySeeds = [];

    const allUsers = await User.findAll();
    const allSpots = await Spot.findAll();

    let spotMaxVisitors = Math.floor(allUsers.length / allSpots.length);

    function generateStayAtHistory() {
      while (allSpots.length) {
        let spot = allSpots.pop();
        let i = getRandNumBetween(1, spotMaxVisitors)
        while (i < spotMaxVisitors) {

          let user = allUsers.pop();

          if (user.id === spot.userId) continue;

          let userId = user.id;
          let spotId = spot.id;

          stayedAtHistorySeeds.push({
            userId, spotId
          });

          ++i;
        }
      }
    }

    generateStayAtHistory();

    return queryInterface.bulkInsert('StayedAtHistories', stayedAtHistorySeeds, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StayedAtHistories', null, {});
  }
};