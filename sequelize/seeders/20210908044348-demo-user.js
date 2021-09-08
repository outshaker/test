'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      nickname: 'John',
      password: 'John',
      email: 'example@example.com',
      user_level: '1',
      picture_url :'',
      background_pic_url:'',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nickname: 'yo',
      password: 'yo',
      email: 'yo@example.com',
      user_level: '1',
      picture_url :'',
      background_pic_url:'',
      createdAt: new Date(),
      updatedAt: new Date()
    }],{});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
