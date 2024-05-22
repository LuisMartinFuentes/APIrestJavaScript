'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pedido', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cliente',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      fecha_pedido: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING(20),
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
    await queryInterface.dropTable('Pedido');
  },
};
