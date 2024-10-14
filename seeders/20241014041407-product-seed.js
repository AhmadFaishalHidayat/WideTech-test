'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('ProductLists', [{
      name: 'Mackbook Pro',
      type: 'Laptop',
      price: 15000000,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Head First Java',
      type: 'Book',
      price: 350000,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ProductLists', null, {});
  }
};
