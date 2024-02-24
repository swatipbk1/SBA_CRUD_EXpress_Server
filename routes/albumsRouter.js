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