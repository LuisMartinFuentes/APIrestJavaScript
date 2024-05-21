const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('MiAguaDB', 'root', '2003', {
  host: '127.0.0.1',
  dialect: 'mariadb'
});

const Cliente = sequelize.define('Cliente', {
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
  tableName: 'Cliente' // Especifica el nombre de la tabla
});

module.exports = Cliente;
