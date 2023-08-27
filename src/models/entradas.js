// models/Entradas.js
const mongoose = require('mongoose');

const entradaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Entrada', entradaSchema);
