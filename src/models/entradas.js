// models/Entradas.js
const mongoose = require('mongoose');

const entradasSchema = new mongoose.Schema({
  titulo: String,
  contenido: String,
  likes: Number,
});

module.exports = mongoose.model('Entradas', entradasSchema);
