const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('MiAguaDB', 'root', '2003', {
  host: '127.0.0.1', // Usa la dirección IPv4
  dialect: 'mariadb'
});

const CodigoBarras = sequelize.define('Codigo_Barras', {
  codigo: {
    type: DataTypes.STRING(13),
    primaryKey: true,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'Codigo_Barras' // Especifica el nombre de la tabla
});

module.exports = CodigoBarras;
