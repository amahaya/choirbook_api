"use strict";
const faker = require("faker");

const generateUsers = (usersCount) => {
  let users = [];

  for (let index = 0; index < usersCount; index++) {
    const user = {
      username: faker.name.firstName(),
      email: faker.internet.email(),
      city: faker.address.city(),
      picture: faker.image.avatar(),
      password: faker.internet.password(),
      birthday: faker.date.past(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    users.push(user);
  }

  return users;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed
     */
    await queryInterface.bulkInsert(
      "Users", //database table's name !!
      generateUsers(50),
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Revert seed.
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
