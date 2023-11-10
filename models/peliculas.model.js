const mongoose = require("mongoose");

let peliculaSchema = new mongoose.Schema({
  nombre: { type: String },
  director: { type: String },
  año: { type: Number },
  duracion: { type: Number },
  genero: { type: String },
});

module.exports = mongoose.model("Pelicula", peliculaSchema, 'peliculas');
