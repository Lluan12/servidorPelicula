const express = require('express');
const router = express.Router();
const peliculas = require('../controllers/peliculas.controller');

router.get('/', peliculas.getPeliculas);
router.get('/:peliculaId', peliculas.getPeliculasById);
router.post('/', peliculas.createPelicula);
router.put('/:peliculaId', peliculas.updatePelicula);
router.delete('/:peliculaId', peliculas.deletePelicula);

module.exports = router;