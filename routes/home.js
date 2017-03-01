'use strict'

const fs = require('fs');
const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {
  fs.readFile('frontend.html', 'utf-8', (err, result) =>{
    res.end(result);
  });
});

module.exports = router;
