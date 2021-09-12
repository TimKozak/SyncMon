const express = require("express");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const router = express.Router();

// Models
const Sync = require("../models/Sync");

// @route   -- GET api/syncs
// @desc    -- Get all user's contacts
// @access  -- Private
router.get("/", auth, async (req, res) => {
  try {
    const syncs = await Sync.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(syncs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
