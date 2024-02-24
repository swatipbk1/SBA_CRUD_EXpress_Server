const express = require("express");
const router = express.Router();

const songs = require("../data/songs");
// Song routes

router.route("/")
  .get((req, res) => {
    let filteredSongs = songs;
