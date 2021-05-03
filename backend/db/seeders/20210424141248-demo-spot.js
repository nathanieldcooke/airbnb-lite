'use strict';

const faker = require("faker");
// database reboot command: 
// npx dotenv sequelize db:seed:undo:all && npx dotenv sequelize db:migrate:undo:all && npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all
module.exports = {
  up: (queryInterface, Sequelize) => {

    const numOfSpots = 16;

    const spotSeeds = [];

    const noDupsCheck = new Set();

    const addressBook = [
      '8277 Bridge Ave,Beckley,WV,25801', '914 North Arlington Lane,Fairmont,WV,26554',
      '3 Foster Street,Halethorpe,MD,21227', '242 W. Applegate Street,Ada,OK,74820',
      '8912 Old Thatcher Road,Cincinnati,OH,45211', '85 Cleveland Street,Neenah,WI,54956',
      '90 West Bridgeton Avenue,Graham,NC,27253', '106 Hamilton Dr.,North Ridgeville,OH,44039',

      '836 Campfire Street,Valrico,FL,33594', '6 NW. 1st St.,North Augusta,SC,29841',
      '32 Foxrun Lane,Granger,IN,46530', '148 Pine Street,Tampa,FL,33604',
      '871 Euclid Street,Oconomowoc,WI,53066', '7865 Manor Station Ave.,Detroit,MI,48205',
      '26 South Fulton Ave.,Palmetto,FL,34221', '77 Arch Rd.,Leominster,MA,01453'
    ]

    const coordinateBook = [
      '37.773610:-81.196880', '39.473010:-80.152670',
      '40.741895:-73.989308', '34.796754:-96.549453',
      '39.158409:-84.602646', '44.174643:-88.475716',
      '35.972114:-79.347527', '41.469416:-82.183406',

      '27.940934:-82.242479', '33.497751:-81.968736',
      '41.738462:-86.045484', '27.96089:-82.491178',
      '43.769267:-87.709515', '42.351524:-83.166294',
      '27.577315:-82.516004', '42.520253:-71.7491'





    ]

    function getAddress() {
      let logAndLat = coordinateBook.pop();
      let [streetAddress, city, state, zipcode] = addressBook.pop().split(',')
      return {state, city, streetAddress, zipcode, logAndLat}
    }
    // may equal min, will be less than max
    function getRandNumBetween(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    function getUserId(i) {
      if ( i < 7) return i;
      if (i === 7 || i === 8) return 7;
      if (i === 9 || i === 10) return 8;
      if (i === 11 || i === 12) return 9;
      if (i === 13 || i === 14 || i === 15 || i === 16) return 10; 
    }

    function generateSpots(numOfSpots) {
      for (let i = 1; i <= numOfSpots; ++i) {
        let {state, city, streetAddress, zipcode, logAndLat} = getAddress();
        if (noDupsCheck.has(streetAddress)) {
          --i;
          continue;
        }
        noDupsCheck.add(streetAddress)
        let country = 'United States';
        let childrenAllowed = (getRandNumBetween(1, 5) === 1) ? true : false;
        let infantsAllowed = (getRandNumBetween(1, 5) === 1) ? true : false;
        let maxGuests = getRandNumBetween(2, 9);
        // rating will be the default value of 0
        let bedrooms = getRandNumBetween(1, 4);
        let beds = getRandNumBetween(1, 3);
        let bathrooms = getRandNumBetween(1, 3);
        let title = faker.lorem.sentence(getRandNumBetween(4, 9));
        let summary = faker.lorem.paragraph(getRandNumBetween(3, 15));
        let userId = getUserId(i);
        let minimumStay = getRandNumBetween(1, 4);
        let price = getRandNumBetween(30, 375);

        spotSeeds.push({
          state, city, streetAddress, zipcode, 
          country, childrenAllowed, infantsAllowed,
          maxGuests, bedrooms, beds, bathrooms,
          title, summary, userId, minimumStay, price,
          logAndLat
        })
      }
    }

    generateSpots(numOfSpots)

    return queryInterface.bulkInsert('Spots', spotSeeds, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Spots', null, {});
  }
};