const express = require("express");
const router = express.Router();
const artists = require("../data/artists");
// Artist routes

router.route("/")
  .get((req, res) => {
    res.json(artists);
  })