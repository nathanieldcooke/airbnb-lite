'use strict';

const { Spot } = require('../models')
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // may equal min, will be less than max
    function getRandNumBetween(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    const allSpots = await Spot.findAll();
    const imageSeeds = [];
    const mainImg = 'https://st.depositphotos.com/1507819/2694/v/600/depositphotos_26948143-stock-illustration-house-drawing.jpg'
    const otherImg = 'https://images.template.net/wp-content/uploads/2016/03/15131449/Easy-and-Simple-Drawing-of-House-Free-PDF-Download.jpg'


    allSpots.forEach(spot => {
      let i = getRandNumBetween(5, 10);
      while (i > 0) {
        let src = (i === 1) ? mainImg : otherImg;
        let title = faker.lorem.sentence(getRandNumBetween(4, 9));
        let main = (i === 1) ? true : false;
        let spotId = spot.id;
        imageSeeds.push({
          src, title, main, spotId
        })
        --i
      }
    })

    return queryInterface.bulkInsert('Images', imageSeeds, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
