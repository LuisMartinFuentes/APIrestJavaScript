const express = require('express');
const { Administrador } = require('../models'); 

const router = express.Router();

// Obtener todos los administradores
router.get('/', async (req, res) => {
  try {
    const administradores = await Administrador.findAll();
    res.json(administradores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un administrador por ID
router.get('/:id', async (req, res) => {
  try {
    const administrador = await Administrador.findByPk(req.params.id);
    if (!administrador) {
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }
    res.json(administrador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo administrador
router.post('/', async (req, res) => {
  try {
    const administrador = await Administrador.create(req.body);
    res.status(201).json(administrador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un administrador
router.put('/:id', async (req, res) => {
  try {
    const administrador = await Administrador.findByPk(req.params.id);
    if (!administrador) {
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }
    await administrador.update(req.body);
    res.json(administrador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un administrador
router.delete('/:id', async (req, res) => {
  try {
    const administrador = await Administrador.findByPk(req.params.id);
    if (!administrador) {
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }
    await administrador.destroy();
    res.json({ message: 'Administrador eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
