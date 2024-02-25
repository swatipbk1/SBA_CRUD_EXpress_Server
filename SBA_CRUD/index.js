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

// Logging Middleware
app.use((req, res, next) => {
  const time = new Date();
  console.log(`Received a ${req.method} request to ${req.url} at ${time.toLocaleTimeString()}.`);
  next();
});

// Routes
app.use("/api/albums", albumsRouter);
app.use("/api/artists", artistsRouter);
app.use("/api/songs", songsRouter);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Music Album API!");
});

// 404 Middleware
app.use((req, res) => {
  res.status(404).json({ error: "Resource Not Found" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
