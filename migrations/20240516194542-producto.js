'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Producto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      precio: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      cantidad_disponible: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      imagen: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Producto');
  },
};
