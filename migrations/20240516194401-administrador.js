'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Administrador', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre_completo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      telefono: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      contrasenia: {
        type: Sequelize.STRING(100),
        allowNull: false,
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
    await queryInterface.dropTable('Administrador');
  },
};
