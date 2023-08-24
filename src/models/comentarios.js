// models/Comentarios.js
const mongoose = require('mongoose');

const comentariosSchema = new mongoose.Schema({
  entradaId: mongoose.Schema.Types.ObjectId,
  autor: String,
  contenido: String,
  
});

module.exports = mongoose.model('Comentarios', comentariosSchema);
