const express = require('express');
const {OrdenCompra} = require('../models'); 

const router = express.Router();

// Obtener todas las órdenes de compra
router.get('/', async (req, res) => {
  try {
    const ordenesCompra = await OrdenCompra.findAll();
    res.json(ordenesCompra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear una nueva orden de compra
router.post('/', async (req, res) => {
  try {
    const ordenCompra = await OrdenCompra.create(req.body);
    res.status(201).json(ordenCompra);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar una orden de compra
router.put('/:id', async (req, res) => {
  try {
    const ordenCompra = await OrdenCompra.findByPk(req.params.id);
    if (!ordenCompra) {
      return res.status(404).json({ message: 'Orden de compra no encontrada' });
    }
    await ordenCompra.update(req.body);
    res.json(ordenCompra);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar una orden de compra
router.delete('/:id', async (req, res) => {
  try {
    const ordenCompra = await OrdenCompra.findByPk(req.params.id);
    if (!ordenCompra) {
      return res.status(404).json({ message: 'Orden de compra no encontrada' });
    }
    await ordenCompra.destroy();
    res.json({ message: 'Orden de compra eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
