"use strict";

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

    await queryInterface.bulkInsert("Boards", [
      {
        title: "Platform Launch",
        statusColumn: "Todo Doing Done",
        userId: 1,
      },
      {
        title: "Marketing Plan",
        statusColumn: "Todo Doing Done",
        userId: 1,
      },
      {
        title: "Sales Plan",
        statusColumn: "Todo Doing Done",
        userId: 2,
      },
      {
        title: "Website Re-Design Plan",
        statusColumn: "Todo Doing Done",
        userId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Boards", null, {});
  },
};
