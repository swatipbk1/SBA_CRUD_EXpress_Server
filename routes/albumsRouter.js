const express = require("express");
const router = express.Router();

const albums = require("../data/albums");

// Album routes

router.route("/")
  .get((req, res) => {
    res.json(albums);
  })