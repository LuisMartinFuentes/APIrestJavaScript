const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('MiAguaDB', 'root', '2003', {
  host: '127.0.0.1', // Usa la dirección IPv4
  dialect: 'mariadb'
});

const OrdenCompra = sequelize.define('OrdenCompra', {
  id_vendedor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_generacion: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'OrdenCompra' // Especifica el nombre de la tabla
});

module.exports = OrdenCompra;
