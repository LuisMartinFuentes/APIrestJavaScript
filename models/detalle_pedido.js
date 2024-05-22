'use strict';

module.exports = (sequelize, DataTypes) => {
  const DetallePedido = sequelize.define('DetallePedido', {
    id_pedido: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pedido',
        key: 'id',
      },
      primaryKey: true,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Producto',
        key: 'id',
      },
      primaryKey: true,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio_unitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    tableName: 'DetallePedido',
    timestamps: true,
  });

  DetallePedido.associate = function(models) {
    DetallePedido.belongsTo(models.Pedido, { foreignKey: 'id_pedido' });
    DetallePedido.belongsTo(models.Producto, { foreignKey: 'id_producto' });
  };

  return DetallePedido;
};
