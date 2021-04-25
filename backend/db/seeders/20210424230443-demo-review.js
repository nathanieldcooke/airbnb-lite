'use strict';

const faker = require("faker");
const { Spot, User, StayedAtHistory } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // may equal min, will be less than max
    function getRandNumBetween(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    const reviewSeeds = [];
    const reviewsArr = [];

    const history = await StayedAtHistory.findAll();

    function generateReviewSeeds() {
      const historyDupe = [...history];
      while(historyDupe.length) {
        let record = historyDupe.pop();
        
        let cleanliness = getRandNumBetween(3, 6);
        let communication = getRandNumBetween(3, 6);
        let checkIn = getRandNumBetween(3, 6);
        let accuracy = getRandNumBetween(3, 6);
        let location = getRandNumBetween(3, 6);
        let value = getRandNumBetween(3, 6);
  
        let reviewContent = faker.lorem.paragraph(getRandNumBetween(1, 15));

        let userId = record.userId;
        let spotId = record.spotId;

        reviewSeeds.push({
          cleanliness, communication, checkIn, accuracy,
          location, value, reviewContent, userId, spotId
        });
      }

    }


    async function calculateAndInsertAvgForSpots() {

      const reviewSeedsDupe = [...reviewSeeds];

      const reviewsObj = reviewSeedsDupe.reduce((sumObject, review) => {
        let reviewAvg = (review.cleanliness + review.communication + 
                    review.checkIn + review.accuracy + 
                    review.location + review.value) / 6;

        if (!sumObject[review.spotId]) {
          sumObject[review.spotId] = { totalSum: reviewAvg, numOfReviews: 1, spotId: review.spotId };
          reviewsArr.push(sumObject[review.spotId])
          return sumObject;
        } else {
          sumObject[review.spotId].totalSum += reviewAvg
          sumObject[review.spotId].numOfReviews += 1
          return sumObject
        }

      }, {});
      
      // reviewsObj should look like:
      // { 
      //  spotId: { totalSum: 23, numOfReviews: 5 }, 
      //  spotId: { totalSum: 23, numOfReviews: 5 } 
      // }
      // const reviewsArr = [];

      for (let review of reviewsArr) {
        let spot = await Spot.findByPk(review.spotId);
        await spot.update({ 
          rating: (review.totalSum / review.numOfReviews).toFixed(2)
         })
      }

    }

    
    generateReviewSeeds() 
    await calculateAndInsertAvgForSpots()

    return queryInterface.bulkInsert('Reviews', reviewSeeds, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
