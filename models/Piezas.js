const mongoose = require('mongoose');

const piezaSchema = mongoose.Schema({
  tipo: {
    type: String,
    require: true
  },
  equipo: {
    type: String,
    require: true
  },
  marca: {
    type: String,
    require: true
  },
  modelo: {
    type: String,
    require: true
  },
  costo: {
    type: mongoose.Types.Decimal128,
    default:0.0
  },
  precio: {
    type: mongoose.Types.Decimal128,
    default:0.0
  },
  proveedor: {
    type: String,
    default:"Recuperada de equipos para piezas."
  },
  propietario: {
    type: String,
    require: true
  },
  xpagar: {
    type: Boolean,
    default: false
  },
  descripcion: {
    type: String,
    default:""
  },
  fecha_creada: {
    type: Date,
    default:Date.now
  },
  fecha_modificada: {
    type: Date,
    default:Date.now
  },
  cantidad: {
    type: Number,
    default:0
  }
}); 

module.exports = mongoose.model('Piezas', piezaSchema);