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

router.route("/:id")
  .get((req, res) => {
    // Placeholder implementation for fetching a specific artist by ID
    const artist = artists.find((artist) => artist.id === parseInt(req.params.id));
    if (artist) {
      res.json(artist);
    } else {
      res.status(404).json({ error: "Artist not found" });
    }
  })
  .patch((req, res) => {
    // Placeholder implementation for updating an artist
    const artistIndex = artists.findIndex((artist) => artist.id === parseInt(req.params.id));
    if (artistIndex !== -1) {
      artists[artistIndex] = { ...artists[artistIndex], ...req.body };
      res.json(artists[artistIndex]);
    } else {
      res.status(404).json({ error: "Artist not found" });
    }
  })
  .delete((req, res) => {
    // Placeholder implementation for deleting an artist
    const artistIndex = artists.findIndex((artist) => artist.id === parseInt(req.params.id));
    if (artistIndex !== -1) {
      const deletedArtist = artists.splice(artistIndex, 1);
      res.json(deletedArtist[0]);
    } else {
      res.status(404).json({ error: "Artist not found" });
    }
  });

module.exports = router;
