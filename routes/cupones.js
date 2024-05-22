const express = require('express');
const {Cupon} = require('../models'); 

const router = express.Router();

// Obtener todos los cupones
router.get('/', async (req, res) => {
  try {
    const cupones = await Cupon.findAll();
    res.json(cupones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un cupón por ID
router.get('/:id', async (req, res) => {
  try {
    const cupon = await Cupon.findByPk(req.params.id);
    if (!cupon) {
      return res.status(404).json({ message: 'Cupón no encontrado' });
    }
    res.json(cupon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo cupón
router.post('/', async (req, res) => {
  try {
    const cupon = await Cupon.create(req.body);
    res.status(201).json(cupon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un cupón
router.put('/:id', async (req, res) => {
  try {
    const cupon = await Cupon.findByPk(req.params.id);
    if (!cupon) {
      return res.status(404).json({ message: 'Cupón no encontrado' });
    }
    await cupon.update(req.body);
    res.json(cupon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un cupón
router.delete('/:id', async (req, res) => {
  try {
    const cupon = await Cupon.findByPk(req.params.id);
    if (!cupon) {
      return res.status(404).json({ message: 'Cupón no encontrado' });
    }
    await cupon.destroy();
    res.json({ message: 'Cupón eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
