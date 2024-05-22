'use strict';

module.exports = (sequelize, DataTypes) => {
  const OrdenCompra = sequelize.define('OrdenCompra', {
    id_vendedor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Vendedor',
        key: 'id',
      },
    },
    id_producto: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Producto',
        key: 'id',
      },
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_generacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'OrdenCompra',
    timestamps: true,
  });

  OrdenCompra.associate = function(models) {
    OrdenCompra.belongsTo(models.Vendedor, { foreignKey: 'id_vendedor' });
    OrdenCompra.belongsTo(models.Producto, { foreignKey: 'id_producto' });
  };

  return OrdenCompra;
};
