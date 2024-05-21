const express = require('express');
const Puntos = require('../models/puntos');
const router = express.Router();

// Obtener todos los puntos
router.get('/', async (req, res) => {
  try {
    const puntos = await Puntos.findAll();
    res.json(puntos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener los puntos de un cliente específico
router.get('/:id_cliente', async (req, res) => {
  try {
    const id_cliente = req.params.id_cliente;
    const puntos = await Puntos.findByPk(id_cliente);
    if (!puntos) {
      return res.status(404).json({ message: 'Puntos no encontrados para este cliente' });
    }
    res.json(puntos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear nuevos puntos para un cliente específico
router.post('/', async (req, res) => {
  try {
    const puntos = await Puntos.create(req.body);
    res.status(201).json(puntos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar los puntos de un cliente
router.put('/:id_cliente', async (req, res) => {
  try {
    const id_cliente = req.params.id_cliente;
    const puntos = await Puntos.findByPk(id_cliente);
    if (!puntos) {
      return res.status(404).json({ message: 'Puntos no encontrados para este cliente' });
    }
    await puntos.update(req.body);
    res.json(puntos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar los puntos de un cliente
router.delete('/:id_cliente', async (req, res) => {
  try {
    const id_cliente = req.params.id_cliente;
    const puntos = await Puntos.findByPk(id_cliente);
    if (!puntos) {
      return res.status(404).json({ message: 'Puntos no encontrados para este cliente' });
    }
    await puntos.destroy();
    res.json({ message: 'Puntos eliminados para este cliente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
