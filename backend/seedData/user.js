const faker = require('faker');
const bcrypt = require('bcryptjs');

// numOfUsers = 110;

userSeeds = [];

noDupCheck = new Set()

function generateUsers(numOfUsers) {
    for (let i = 0; i < numOfUsers; ++i) {

        let email = `${faker.internet.userName()}@random.com`;
        let username = faker.internet.userName();
        let isHost = (i <= 10) ? true : false;

        if (noDupCheck.has(email) || noDupCheck.has(username)) {
            --i;
            continue;
        }

        userSeeds.push({
            isHost,
            email,
            username,
            hashedPassword: bcrypt.hashSync('password')
        });
    };
}

module.exports = {
    generateUsers
}