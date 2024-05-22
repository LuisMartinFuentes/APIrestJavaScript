'use strict';

module.exports = (sequelize, DataTypes) => {
  const Puntos = sequelize.define('Puntos', {
    id_cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Cliente',
        key: 'id',
      },
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'Puntos',
    timestamps: true,
  });

  Puntos.associate = function(models) {
    Puntos.belongsTo(models.Cliente, { foreignKey: 'id_cliente' });
  };

  return Puntos;
};
