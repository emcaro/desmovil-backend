const express = require('express');
const router = express.Router();
const Pieza = require('../models/Piezas');

//lista total de las piezas
router.get('/', async (req, res) => {
  try {
    const posts = await Pieza.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//lista total de los tactiles
router.get('/tactiles', async (req, res) => {
  try {
    const posts = await Pieza.find({ tipo: 'Touch' });
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//lista total de los displays
router.get('/displays', async (req, res) => {
  try {
    const posts = await Pieza.find({ tipo: 'Display' });
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//lista total de las baterias
router.get('/baterias', async (req, res) => {
  try {
    const posts = await Pieza.find({ tipo: 'Batery' });
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//lista total de los cristales
router.get('/cristales', async (req, res) => {
  try {
    const posts = await Pieza.find({ tipo: 'Glass' });
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//lista total de las tapas traseras
router.get('/tapas-traseras', async (req, res) => {
  try {
    const posts = await Pieza.find({ tipo: 'Backcover' });
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Agregando una pieza a traves de POST
router.post('/', async (req, res) => {
  const pieza = new Pieza({
    tipo: req.body.tipo,
    equipo: req.body.equipo,
    marca: req.body.marca,
    modelo: req.body.modelo,
    costo: req.body.costo,
    precio: req.body.precio,
    proveedor: req.body.proveedor,
    propietario: req.body.propietario,
    xpagar: req.body.xpagar,
    descripcion: req.body.descripcion,
    cantidad: req.body.cantidad
  });
  try {
    const savedPieza = await pieza.save();
    res.json(savedPieza);
  } catch (err) {
    res.json({ message: err });
  }
});

//Eliminar una pieza a traves de su id
router.delete('/:piezaId', async (req, res) => {
  try {
    const piezaRemoved = await Pieza.remove({ _id: req.params.piezaId });
    res.json(piezaRemoved);
  } catch (err) {
    res.json({ message: err });
  }
});

//Editar una pieza existente a traves de su id
router.patch('/:piezaId', async (req, res) => {
  try {
    const updatedPieza = await Pieza.updateOne(
      { _id: req.params.piezaId },
      {
        $set: {
          tipo: req.body.tipo,
          equipo: req.body.equipo,
          marca: req.body.marca,
          modelo: req.body.modelo,
          costo: req.body.costo,
          precio: req.body.precio,
          proveedor: req.body.proveedor,
          propietario: req.body.propietario,
          xpagar: req.body.xpagar,
          descripcion: req.body.descripcion,
          cantidad: req.body.cantidad,
          fecha_modificada: Date.now()
        }
      });
    res.json(updatedPieza);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;

