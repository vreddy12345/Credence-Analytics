const Movie = require("../model/movieModel");

//Create Movie
exports.createMovie = async (req, res, next) => {
  const movie = await Movie.create(req.body);
  res.status(201).json({
    success: true,
    movie,
  });
};

//get all movies
exports.getAllMovies = async (req, res) => {
  const movies = await Movie.find();

  res.status(200).json({
    success: true,
    movies,
  });
};

//update movie
exports.updateMovie = async (req, res, next) => {
  let movie = await Movie.findById(req.params.id);

  if (!movie) {
    return res.status(500).json({
      success: false,
      message: "movie not found",
    });
  }

  movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    movie,
  });
};

//delete movie
exports.deleteMovie = async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    return res.status(500).json({
      success: false,
      message: "movie not found",
    });
  }

  await movie.deleteOne();

  res.status(200).json({
    success: true,
    message: "movie deleted successfully",
  });
};
