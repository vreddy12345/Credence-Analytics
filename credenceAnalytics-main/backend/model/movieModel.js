const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the movie name"],
    trim: true,
  },
  img: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  summary: {
    type: String,
    required: [true, "Enter the movie summary"],
  },
});

module.exports = mongoose.model("Movie", movieSchema);
