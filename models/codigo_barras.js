'use strict';

module.exports = (sequelize, DataTypes) => {
  const Codigo_Barras = sequelize.define('Codigo_Barras', {
    id_cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Cliente',
        key: 'id',
      },
    },
    codigo: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
  }, {
    tableName: 'Codigo_Barras',
    timestamps: true,
  });

  Codigo_Barras.associate = function(models) {
    Codigo_Barras.belongsTo(models.Cliente, { foreignKey: 'id_cliente' });
  };

  return Codigo_Barras;
};
