'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crear la tabla Vendedor si no existe
    await queryInterface.createTable('Vendedor', {
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

    // Crear la tabla OrdenCompra
    await queryInterface.createTable('OrdenCompra', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_vendedor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Vendedor', // Nombre de la tabla referenciada
          key: 'id'         // Nombre de la columna referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_producto: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fecha_generacion: {
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
    // Eliminar la tabla OrdenCompra
    await queryInterface.dropTable('OrdenCompra');

    // Eliminar la tabla Vendedor
    await queryInterface.dropTable('Vendedor');
  }
};
