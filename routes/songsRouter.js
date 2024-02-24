const express = require("express");
const router = express.Router();

const songs = require("../data/songs");
// Song routes

router.route("/")
  .get((req, res) => {
    let filteredSongs = songs;
     // Filter songs by genre if genre query parameter is provided
     if (req.query.genre) {
        filteredSongs = songs.filter((song) => song.genre && song.genre.toLowerCase() === req.query.genre.toLowerCase());
      }

      res.json(filteredSongs);
  })
  .post((req, res) => {
    // Placeholder implementation for creating a new song
    const newSong = req.body; // Assuming the request body contains song data
    songs.push(newSong);
    res.status(201).json(newSong);
  });
  router.route("/:id")
  .get((req, res) => {
    // Placeholder implementation for fetching a specific song by ID
    const song = songs.find((song) => song.id === parseInt(req.params.id));
    if (song) {
      res.json(song);
    } else {
        res.status(404).json({ error: "Song not found" });
    }
  })