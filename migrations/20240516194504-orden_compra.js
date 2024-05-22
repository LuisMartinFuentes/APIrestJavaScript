'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrdenCompra', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_vendedor: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vendedor',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_producto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Producto',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fecha_generacion: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('OrdenCompra');
  },
};
