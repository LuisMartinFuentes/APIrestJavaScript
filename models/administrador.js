const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('MiAguaDB', 'root', '2003', {
  host: '127.0.0.1',
  dialect: 'mariadb'
});

const Administrador = sequelize.define('Administrador', {
  nombre_completo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  contrasenia: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'Administrador' // Especifica el nombre de la tabla
});

module.exports = Administrador;
