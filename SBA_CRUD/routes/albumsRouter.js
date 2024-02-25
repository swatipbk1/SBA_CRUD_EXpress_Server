const express = require("express");
const router = express.Router();

const albums = require("../data/albums");

// Album routes

router.route("/")
  .get((req, res) => {
    res.json(albums);
  })
  .post((req, res) => {
    // Placeholder implementation for creating a new album
    const newAlbum = req.body; // Assuming the request body contains album data
    albums.push(newAlbum);
    res.status(201).json(newAlbum);
  });

router.route("/:id")
  .get((req, res) => {
    // Placeholder implementation for fetching a specific album by ID
    const album = albums.find((album) => album.id === parseInt(req.params.id));
    if (album) {
      res.json(album);
    } else {
      res.status(404).json({ error: "Album not found" });
    }
  })
  .patch((req, res) => {
    // Placeholder implementation for updating an album
    const albumIndex = albums.findIndex((album) => album.id === parseInt(req.params.id));
    if (albumIndex !== -1) {
      albums[albumIndex] = { ...albums[albumIndex], ...req.body };
      res.json(albums[albumIndex]);
    } else {
      res.status(404).json({ error: "Album not found" });
    }
  })
  .delete((req, res) => {
    // Placeholder implementation for deleting an album
    const albumIndex = albums.findIndex((album) => album.id === parseInt(req.params.id));
    if (albumIndex !== -1) {
      const deletedAlbum = albums.splice(albumIndex, 1);
      res.json(deletedAlbum[0]);
    } else {
      res.status(404).json({ error: "Album not found" });
    }
  });

module.exports = router;
