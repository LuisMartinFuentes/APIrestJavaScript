'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crear la tabla Producto
    await queryInterface.createTable('Producto', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      precio: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      cantidad_disponible: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imagen: {
        type: Sequelize.STRING(255),
        allowNull: true
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
    // Eliminar la tabla Producto
    await queryInterface.dropTable('Producto');
  }
};

