// models/Comentarios.js
const mongoose = require('mongoose');

const comentariosSchema = new mongoose.Schema({
  autor: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  },
  entrada: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entrada'
  }
});

module.exports = mongoose.model('Comentarios', comentariosSchema);
