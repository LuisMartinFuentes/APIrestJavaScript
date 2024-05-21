const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('MiAguaDB', 'root', '2003', {
  host: '127.0.0.1',
  dialect: 'mariadb'
});

const Cupon = sequelize.define('Cupon', {
  codigo: {
    type: DataTypes.TEXT,
    unique: true,
    allowNull: false
  },
  descuento: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  },
  validez: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'Cupon' // Especifica el nombre de la tabla
});

module.exports = Cupon;
