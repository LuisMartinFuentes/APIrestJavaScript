'use strict';

module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    cantidad_disponible: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    tableName: 'Producto',
    timestamps: true,
  });

  Producto.associate = function(models) {
    Producto.belongsToMany(models.Pedido, { through: models.DetallePedido, foreignKey: 'id_producto' });
    Producto.hasMany(models.DetallePedido, { foreignKey: 'id_producto' });
    Producto.hasMany(models.OrdenCompra, { foreignKey: 'id_producto' });
  };

  return Producto;
};
