const express = require("express");
const app = express();

app.use(express.json());
//IMPORTING ROUTES
const movie = require("./routes/moviesRoute");

app.use("/api/v1", movie);

module.exports = app;
