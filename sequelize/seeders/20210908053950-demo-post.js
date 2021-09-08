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
    return queryInterface.bulkInsert('Posts', [{
      user_id: '1',
      restaurant_id: '',
      title: 'myfirstPost',
      content: 'yoyo',
      views :5,
      is_deleted:0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: '1',
      restaurant_id: '',
      title: 'mysecondPost',
      content: '2*好yo',
      views :13,
      is_deleted:0,
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
     return queryInterface.bulkDelete('Posts', null, {});
  }
};
