const express = require('express');

const Recipe = require('../helpers/recipe-db')

const router = express.Router();

router.get('/', (req, res) => {
  res.json();
});

module.exports = router;