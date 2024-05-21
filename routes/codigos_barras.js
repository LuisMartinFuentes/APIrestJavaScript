const express = require('express');
const CodigoBarras = require('../models/codigo_barras');
const router = express.Router();

// Obtener todos los códigos de barras
router.get('/', async (req, res) => {
  try {
    const codigosBarras = await CodigoBarras.findAll();
    res.json(codigosBarras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un código de barras por ID de cliente
router.get('/:id_cliente', async (req, res) => {
  try {
    const codigoBarras = await CodigoBarras.findByPk(req.params.id_cliente);
    if (!codigoBarras) {
      return res.status(404).json({ message: 'Código de barras no encontrado para este cliente' });
    }
    res.json(codigoBarras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo código de barras
router.post('/', async (req, res) => {
  try {
    const codigoBarras = await CodigoBarras.create(req.body);
    res.status(201).json(codigoBarras);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un código de barras
router.put('/:id_cliente', async (req, res) => {
  try {
    const codigoBarras = await CodigoBarras.findByPk(req.params.id_cliente);
    if (!codigoBarras) {
      return res.status(404).json({ message: 'Código de barras no encontrado para este cliente' });
    }
    await codigoBarras.update(req.body);
    res.json(codigoBarras);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un código de barras
router.delete('/:id_cliente', async (req, res) => {
  try {
    const codigoBarras = await CodigoBarras.findByPk(req.params.id_cliente);
    if (!codigoBarras) {
      return res.status(404).json({ message: 'Código de barras no encontrado para este cliente' });
    }
    await codigoBarras.destroy();
    res.json({ message: 'Código de barras eliminado para este cliente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
