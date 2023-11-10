exports.getPeliculas = (req, res) => {
  try {
    return res.status(200).json({
      message: "Peliculas obtenidas correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener las peliculas",
      data: error,
    });
  }
};

exports.getPeliculasById = (req, res) => {
	try {
		const peliculaId = req.params.peliculaId;
		return res.status(200).json({
			message: "Pelicula obtenida con el Id: " + peliculaId,
		});
	} catch (error) {
		return res.status(500).json({
			message: "Error al obtener la pelicula",
			data: error,
		});
	}
};

exports.createPelicula = (req, res) => {
	try {
		const newPelicula = req.body;
		return res.status(200).json({
			message: "Pelicula creada correctamente",
		});
	} catch (error) {
		return res.status(500).json({
			message: "Error al crear la pelicula",
			data: error,
		});
	}
}

exports.updatePelicula = (req, res) => {
	try {
		const peliculaId = req.params.peliculaId;
		const updatedPelicula = req.body;
		return res.status(201).json({
			message: "Pelicula actualizada con el Id: " + peliculaId,
		});
	} catch (error) {
		return res.status(500).json({
			message: "Error al actualizar la pelicula",
			data: error,
		});
	}
}

exports.deletePelicula = (req, res) => {
	try {
		const peliculaId = req.params.peliculaId;
		return res.status(200).json({
			message: "Pelicula eliminada con el Id: " + peliculaId,
		});
	} catch (error) {
		return res.status(500).json({
			message: "Error al eliminar la pelicula",
			data: error,
		});
	}
}