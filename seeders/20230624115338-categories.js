'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Design, Ux & UI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Inteligencia Artificial, aprendizado de máquina',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Desenvolvimento Mobile e/ ou Web ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Desenvolvimento Pessoal e Profissional',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Programação e Tecnologia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Desenvolvimento Financeiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marketing e Mercado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
