'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('photos', 'originalName', 'original_name');
    await queryInterface.renameColumn('photos', 'fileName', 'file_name');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('photos', 'original_name', 'originalName');
    await queryInterface.renameColumn('photos', 'file_name', 'fileName');
  },
};
