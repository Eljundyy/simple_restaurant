'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'Categories',
        [
        {
          nama: 'Snacks',
          deskripsi: "Makanan ringan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama: 'Drinks',
          deskripsi: "Minuman segar",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama: 'Dishes',
          deskripsi: "Makanan utama",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
