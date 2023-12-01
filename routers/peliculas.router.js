const express = require('express');
const router = express.Router();
const peliculas = require('../controllers/peliculas.controller');
const authMiddleware = require('../utils/auth.middleware');

router.get('/', peliculas.getPeliculas);
router.get('/:peliculaId', peliculas.getPeliculasById);
router.post('/', authMiddleware.authenticateToken, peliculas.createPelicula);
router.put('/:peliculaId', authMiddleware.authenticateToken, peliculas.updatePelicula);
router.delete('/:peliculaId', authMiddleware.authenticateToken, peliculas.deletePelicula);

module.exports = router;