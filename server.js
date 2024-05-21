const express = require('express');
const Sequelize = require('sequelize');
const cors = require('cors');
const path = require('path'); // Importa el módulo path
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');
const pedidosRouter = require('./routes/pedidos');
const detallesPedidoRouter = require('./routes/detalles_pedido');
const cuponesRouter = require('./routes/cupones');
const puntosRouter = require('./routes/puntos');
const ordenCompraRouter = require('./routes/orden_compra');
const adminRouter = require('./routes/administradores');
const vendedorRouter = require('./routes/vendedores');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
// Middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));


// Conexión a la base de datos MySQL en Azure
const sequelize = new Sequelize('MiAguaDB', 'root', '2003', {
  host: '127.0.0.1', // Usa la dirección IPv4
  dialect: 'mariadb'
});

// Verifica la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos local establecida correctamente');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos local:', err);
  });

// Ruta para servir la página HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rutas
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);
app.use('/pedidos', pedidosRouter);
app.use('/detalles-pedido', detallesPedidoRouter);
app.use('/cupones', cuponesRouter);
app.use('/puntos', puntosRouter);
app.use('/ordenes-compra', ordenCompraRouter);
app.use('/administradores', adminRouter);
app.use('/vendedores', vendedorRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Iniciar el servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
