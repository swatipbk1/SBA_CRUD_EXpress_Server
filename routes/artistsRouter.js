const express = require("express");
const router = express.Router();
const artists = require("../data/artists");
// Artist routes

router.route("/")
  .get((req, res) => {
    res.json(artists);
  })
  .post((req, res) => {
    // Placeholder implementation for creating a new artist
    const newArtist = req.body; // Assuming the request body contains artist data
    artists.push(newArtist);
    res.status(201).json(newArtist);
  });