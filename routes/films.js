const filmsController = require('../controllers/films.controller');
const router = require('express').Router();

// Get http://localhost:3000/api/film/title
router.get("/:title", filmsController.getFilmByTitle);

// Post http://localhost:3000/api/film
router.post('/', filmsController.createFilm);

// Put http://localhost:3000/api/film
router.put('/', filmsController.editFilm);

// Delete http://localhost:3000/api/film
router.delete('/', filmsController.deleteFilm);

module.exports = router;