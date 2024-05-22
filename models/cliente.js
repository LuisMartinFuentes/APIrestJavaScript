'use strict';

module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
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
    tableName: 'Cliente',
    timestamps: true,
  });

  Cliente.associate = function(models) {
    Cliente.hasMany(models.Pedido, { foreignKey: 'id_cliente' });
    Cliente.hasOne(models.Codigo_Barras, { foreignKey: 'id_cliente' });
    Cliente.hasOne(models.Puntos, { foreignKey: 'id_cliente' });
  };

  return Cliente;
};
