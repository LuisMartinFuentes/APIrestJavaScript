require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectToDatabase, sequelize } = require('./config/sequelize');
const adminRouter = require('./routes/administradores');
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');
const pedidosRouter = require('./routes/pedidos');
const detallesPedidoRouter = require('./routes/detalles_pedido');
const cuponesRouter = require('./routes/cupones');
const puntosRouter = require('./routes/puntos');
const ordenCompraRouter = require('./routes/orden_compra');
const vendedorRouter = require('./routes/vendedores');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

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

// Conectar a la base de datos y ejecutar migraciones antes de iniciar el servidor
(async () => {
  await connectToDatabase();
  await sequelize.sync({ force: false });
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
})();
