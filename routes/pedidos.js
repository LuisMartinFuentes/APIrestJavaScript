const express = require('express');
const Pedido = require('../models/pedido');
const router = express.Router();

// Obtener todos los pedidos
router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo pedido
router.post('/', async (req, res) => {
  try {
    const pedido = await Pedido.create(req.body);
    res.status(201).json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un pedido
router.put('/:id', async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    await pedido.update(req.body);
    res.json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un pedido
router.delete('/:id', async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    await pedido.destroy();
    res.json({ message: 'Pedido eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
