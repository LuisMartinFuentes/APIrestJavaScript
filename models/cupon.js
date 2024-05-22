'use strict';

module.exports = (sequelize, DataTypes) => {
  const Cupon = sequelize.define('Cupon', {
    codigo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    descuento: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    validez: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'Cupon',
    timestamps: true,
  });

  return Cupon;
};
