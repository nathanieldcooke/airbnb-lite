'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');
// const userSeeds = require('../../seedData/user');

module.exports = {
  up: (queryInterface, Sequelize) => {

    let numOfUsers = 110;

    const userSeeds = [];

    const noDupCheck = new Set()

    function generateUsers(numOfUsers) {
      for (let i = 1; i <= numOfUsers; ++i) {

        let email = `${faker.internet.userName()}@random.com`;
        let username = faker.internet.userName();
        // let isHost = (i <= 10) ? true : false;

        if (noDupCheck.has(email) || noDupCheck.has(username)) {
          --i;
          continue;
        }

        // isHost,
        userSeeds.push({
          email,
          username,
          hashedPassword: bcrypt.hashSync('password')
        });
      };
    }

    generateUsers(numOfUsers)

    return queryInterface.bulkInsert('Users', userSeeds, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};