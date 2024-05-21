'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crear la tabla Administrador
    await queryInterface.createTable('Administrador', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_completo: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      telefono: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      contrasenia: {
        type: Sequelize.STRING(100),
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
    // Eliminar la tabla Administrador
    await queryInterface.dropTable('Administrador');
  }
};

