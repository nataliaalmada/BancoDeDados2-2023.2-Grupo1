'use strict';
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const buffer = await fs.promises.readFile(path.join(__dirname, '..', 'public', 'images', 'user_image.jpg'));

    await queryInterface.bulkInsert('Users', [
      {
        image: buffer,
        imageMimeType: "image/jpg",
        name: 'João Randel',
        email: 'joao.randel@example.com',
        role: 'root',
        status: 'active',
        password: bcrypt.hashSync('password123', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: buffer,
        imageMimeType: "image/jpg",
        name: 'Matheus Melo',
        email: 'matheus.melo@example.com',
        role: 'admin',
        status: 'active',
        password: bcrypt.hashSync('password456', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: buffer,
        imageMimeType: "image/jpg",
        name: 'José Queiroz',
        email: 'jose.queiroz@example.com',
        role: 'admin',
        status: 'active',
        password: bcrypt.hashSync('password789', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: buffer,
        imageMimeType: "image/jpg",
        name: 'Natalia Almada',
        email: 'natalia.almada@example.com',
        role: 'admin',
        status: 'active',
        password: bcrypt.hashSync('passwordabc', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: buffer,
        imageMimeType: "image/jpg",
        name: 'Ramses Carvalho',
        email: 'ramses.carvalho@example.com',
        role: 'student',
        status: 'active',
        password: bcrypt.hashSync('passworddef', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
     ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
