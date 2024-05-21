const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('MiAguaDB', 'root', '2003', {
  host: '127.0.0.1', // Usa la dirección IPv4
  dialect: 'mariadb'
});

const Pedido = sequelize.define('Pedido', {
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_pedido: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  tableName: 'Pedido' // Especifica el nombre de la tabla
});

module.exports = Pedido;
