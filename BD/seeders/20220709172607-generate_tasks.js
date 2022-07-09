'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('tasks', [
       {
        id: 1,
         description: 'Tarea 1',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        id: 2,
         description: 'Tarea 2',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        id: 3,
         description: 'Tarea 3',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        id: 4,
         description: 'Tarea 4',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        id: 5,
         description: 'Tarea 5',
         createdAt: new Date(),
         updatedAt: new Date()
       },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('tasks', null, {});
  }
};
