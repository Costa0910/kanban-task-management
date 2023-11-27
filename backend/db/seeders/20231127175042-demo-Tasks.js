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

    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          title: "Task 1",
          description: "Task 1 description",
          status: "Todo",
          boardId: 1,
        },
        {
          title: "Plan Product Hunt launch",
          description: "Task 2 description",
          status: "Todo",
          boardId: 1,
        },
        {
          title: "Share on Show HN",
          description: "Task 3 description",
          status: "Done",
          boardId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
