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
      "SubTasks",
      [
        {
          title: "Find hunter",
          isCompleted: false,
          taskId: 1,
        },
        {
          title: "Gather assets",
          isCompleted: false,
          taskId: 1,
        },
        {
          title: "Draft product page",
          isCompleted: false,
          taskId: 1,
        },
        {
          title: "Notify customers",
          isCompleted: false,
          taskId: 2,
        },
        {
          title: "Notify network",
          isCompleted: false,
          taskId: 2,
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
  },
};
