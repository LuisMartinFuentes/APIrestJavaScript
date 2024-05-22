'use strict';

module.exports = (sequelize, DataTypes) => {
  const Vendedor = sequelize.define('Vendedor', {
    nombre_completo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    contrasenia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    tableName: 'Vendedor',
    timestamps: true,
  });

  Vendedor.associate = function(models) {
    Vendedor.hasMany(models.Orden_Compra, { foreignKey: 'id_vendedor' });
  };

  return Vendedor;
};
