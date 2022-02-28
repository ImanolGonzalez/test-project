const express = require("express");
const router = express.Router();

// @route    GET api/images
// @desc     Get all users images
// @access   Private
router.get("/", (req, res) => {});

// @route    POST api/auth
// @desc     Add new image
// @access   Private
router.post("/", (req, res) => {});

// @route    DELETE api/auth/:id
// @desc     Delete image
// @access   Private
router.put("/:id", (req, res) => {});

module.exports = router;
