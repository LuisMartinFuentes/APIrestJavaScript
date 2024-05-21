const express = require('express');
const Cliente = require('../models/cliente');
const CodigoBarras = require('../models/codigo_barras');
const router = express.Router();
const faker = require('faker');

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un cliente por ID
router.get('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo cliente con código de barras aleatorio y registrar usuario
router.post('/', async (req, res) => {
  try {
    const { nombre_completo, telefono, contrasenia } = req.body;

    // Verificar si ya existe un cliente con el mismo número de teléfono
    const existingCliente = await Cliente.findOne({ where: { telefono } });
    if (existingCliente) {
      return res.status(400).json({ error: 'Ya existe un cliente con este número de teléfono' });
    }

    // Verificar la longitud de la contraseña
    if (contrasenia.length < 8) {
      return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
    }

    // Crear el cliente en la base de datos
    const nuevoCliente = await Cliente.create({ nombre_completo, telefono, contrasenia });

    // Generar un código de barras aleatorio
    const codigoBarras = faker.datatype.number({min: 1000000000000, max: 9999999999999}).toString();

    // Guardar el código de barras en la tabla Codigo_Barras
    await CodigoBarras.create({ id_cliente: nuevoCliente.id, codigo: codigoBarras });

    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Actualizar un cliente
router.put('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    await cliente.update(req.body);
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un cliente
router.delete('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    await cliente.destroy();
    res.json({ message: 'Cliente eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
