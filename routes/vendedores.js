const express = require('express');
const Vendedor = require('../models/vendedor');
const router = express.Router();

// Obtener todos los vendedores
router.get('/', async (req, res) => {
  try {
    const vendedores = await Vendedor.findAll();
    res.json(vendedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un vendedor por ID
router.get('/:id', async (req, res) => {
  try {
    const vendedor = await Vendedor.findByPk(req.params.id);
    if (!vendedor) {
      return res.status(404).json({ message: 'Vendedor no encontrado' });
    }
    res.json(vendedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo vendedor
router.post('/', async (req, res) => {
  try {
    const vendedor = await Vendedor.create(req.body);
    res.status(201).json(vendedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un vendedor
router.put('/:id', async (req, res) => {
  try {
    const vendedor = await Vendedor.findByPk(req.params.id);
    if (!vendedor) {
      return res.status(404).json({ message: 'Vendedor no encontrado' });
    }
    await vendedor.update(req.body);
    res.json(vendedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un vendedor
router.delete('/:id', async (req, res) => {
  try {
    const vendedor = await Vendedor.findByPk(req.params.id);
    if (!vendedor) {
      return res.status(404).json({ message: 'Vendedor no encontrado' });
    }
    await vendedor.destroy();
    res.json({ message: 'Vendedor eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
