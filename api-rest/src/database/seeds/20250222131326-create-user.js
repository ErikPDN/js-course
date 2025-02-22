'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password_hash: bcrypt.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'John Does',
        email: 'johndoe1@gmail.com',
        password_hash: bcrypt.hashSync('1123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Lula Inacio',
        email: 'lula@gmail.com',
        password_hash: bcrypt.hashSync('1123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down() {
  }
};
