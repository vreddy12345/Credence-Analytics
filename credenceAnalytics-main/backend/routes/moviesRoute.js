const express = require('express');
const { getAllMovies ,createMovie,updateMovie, deleteMovie} = require('../controller/moviesController');


const router= express.Router();

router.route("/movies").get(getAllMovies);
router.route("/movie/new").post(createMovie);
router.route("/movie/:id").put(updateMovie).delete(deleteMovie);



module.exports = router