const express = require("express");
const bodyParser = require("body-parser");

const albumsRouter = require("./routes/albumsRouter");
const artistsRouter = require("./routes/artistsRouter");
const songsRouter = require("./routes/songsRouter");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
