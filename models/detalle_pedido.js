const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('MiAguaDB', 'root', '2003', {
  host: '127.0.0.1', // Usa la dirección IPv4
  dialect: 'mariadb'
});

const DetallePedido = sequelize.define('DetallePedido', {
  id_pedido: {
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
  precio_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'DetallePedido' // Especifica el nombre de la tabla
});

module.exports = DetallePedido;
