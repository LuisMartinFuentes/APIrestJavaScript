const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('MiAguaDB', 'root', '2003', {
  host: '127.0.0.1', // Usa la dirección IPv4
  dialect: 'mariadb'
});

const Puntos = sequelize.define('Puntos', {
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Puntos' // Especifica el nombre de la tabla
});

module.exports = Puntos;
