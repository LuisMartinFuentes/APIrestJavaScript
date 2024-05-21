'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crear la tabla Puntos
    await queryInterface.createTable('Puntos', {
      id_cliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'Cliente',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
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
    // Eliminar la tabla Puntos
    await queryInterface.dropTable('Puntos');
  }
};
