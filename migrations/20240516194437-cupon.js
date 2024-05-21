'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crear la tabla Cupon
    await queryInterface.createTable('Cupon', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      codigo: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false
      },
      descuento: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false
      },
      validez: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la tabla Cupon
    await queryInterface.dropTable('Cupon');
  }
};
