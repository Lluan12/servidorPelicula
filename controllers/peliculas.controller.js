const Pelicula = require("../models/peliculas.model");

exports.getPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    return res.status(200).json({
      message: "Peliculas obtenidas correctamente",
      data: peliculas,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener las peliculas",
      data: error,
    });
  }
};

exports.getPeliculasById = async (req, res) => {
  const peliculaId = req.params.peliculaId;
  try {
    const pelicula = await Pelicula.findById(peliculaId);
    return res.status(200).json({
      message: "Pelicula obtenida correctamente",
      data: pelicula,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener la pelicula",
      data: error,
    });
  }
};

exports.createPelicula = async (req, res) => {
  try {
    const { nombre, director, año, duracion, genero } = req.body;
    const pelicula = new Pelicula({ nombre, director, año, duracion, genero });
    await pelicula.save();
    return res.status(200).json({
      message: "Pelicula creada correctamente",
      data: pelicula,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear la pelicula",
      data: error,
    });
  }
};

exports.updatePelicula = async (req, res) => {
  const peliculaId = req.params.peliculaId;
  const newData = req.body;
  try {
    const updatePelicula = await Pelicula.findByIdAndUpdate(
      peliculaId,
      newData,
      { new: true}
    );
    return res.status(201).json({
      message: "Pelicula actualizada correctamente",
      data: updatePelicula,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar la pelicula",
      data: error,
    });
  }
};

exports.deletePelicula = async (req, res) => {
  const peliculaId = req.params.peliculaId;
  try {
    await Pelicula.findByIdAndDelete(peliculaId);
    return res.status(201).json({
      message: "Pelicula eliminada con el id: " + peliculaId,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar la pelicula",
      data: error,
    });
  }
};
