const mongoose = require('mongoose');

const Paleta__SCHEMA = new mongoose.Schema({
  sabor: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
});

const Paleta = mongoose.model('paletas', Paleta__SCHEMA);

module.exports = Paleta;
