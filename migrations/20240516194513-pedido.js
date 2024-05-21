'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crear la tabla Pedido
    await queryInterface.createTable('Pedido', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cliente',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fecha_pedido: {
        type: Sequelize.DATE,
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(20),
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
    // Eliminar la tabla Pedido
    await queryInterface.dropTable('Pedido');
  }
};
