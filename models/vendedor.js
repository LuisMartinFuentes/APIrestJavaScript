const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('MiAguaDB', 'root', '2003', {
  host: '127.0.0.1', // Usa la dirección IPv4
  dialect: 'mariadb'
});

const Vendedor = sequelize.define('Vendedor', {
  nombre_completo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefono: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  contrasenia: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'Vendedor' // Especifica el nombre de la tabla
});

module.exports = Vendedor;
