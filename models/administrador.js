'use strict';

module.exports = (sequelize, DataTypes) => {
  const Administrador = sequelize.define('Administrador', {
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
    tableName: 'Administrador',
    timestamps: true,
  });

  return Administrador;
};
