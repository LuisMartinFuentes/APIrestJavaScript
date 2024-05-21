const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('MiAguaDB', 'root', '2003', {
  host: '127.0.0.1', // Usa la dirección IPv4
  dialect: 'mariadb'
});

const Producto = sequelize.define('Producto', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false 
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  cantidad_disponible: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'Producto' // Especifica el nombre de la tabla
});

module.exports = Producto;
