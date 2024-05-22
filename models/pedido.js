'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    id_cliente: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cliente',
        key: 'id',
      },
    },
    fecha_pedido: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    tableName: 'Pedido',
    timestamps: true,
  });

  Pedido.associate = function(models) {
    Pedido.belongsTo(models.Cliente, { foreignKey: 'id_cliente' });
    Pedido.belongsToMany(models.Producto, { through: models.Detalle_Pedido, foreignKey: 'id_pedido' });
    Pedido.hasMany(models.Detalle_Pedido, { foreignKey: 'id_pedido' });
  };

  return Pedido;
};
