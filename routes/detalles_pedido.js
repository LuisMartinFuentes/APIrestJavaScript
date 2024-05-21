const express = require('express');
const DetallePedido = require('../models/detalle_pedido');
const router = express.Router();

// Obtener todos los detalles de pedidos
router.get('/', async (req, res) => {
  try {
    const detallesPedido = await DetallePedido.findAll();
    res.json(detallesPedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener los detalles de pedidos para un pedido específico
router.get('/pedido/:id_pedido', async (req, res) => {
  try {
    const id_pedido = req.params.id_pedido;
    const detallesPedido = await DetallePedido.findAll({ where: { id_pedido } });
    res.json(detallesPedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo detalle de pedido
router.post('/', async (req, res) => {
  try {
    const detallePedido = await DetallePedido.create(req.body);
    res.status(201).json(detallePedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un detalle de pedido
router.put('/:id', async (req, res) => {
  try {
    const detallePedido = await DetallePedido.findByPk(req.params.id);
    if (!detallePedido) {
      return res.status(404).json({ message: 'Detalle de pedido no encontrado' });
    }
    await detallePedido.update(req.body);
    res.json(detallePedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un detalle de pedido
router.delete('/:id', async (req, res) => {
  try {
    const detallePedido = await DetallePedido.findByPk(req.params.id);
    if (!detallePedido) {
      return res.status(404).json({ message: 'Detalle de pedido no encontrado' });
    }
    await detallePedido.destroy();
    res.json({ message: 'Detalle de pedido eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
