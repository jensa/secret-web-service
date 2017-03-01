'use strict'

const express = require('express');
const router = express.Router();

const db = require('./rsvp-db');

router.get('/', (req, res) => {
	db.readRSVPs((err, rsvps) => {
		if (err) {
			res.status(500).json(err);
		} else {
			res.status(200).json(rsvps);
		}
	});
});

router.post('/', (req, res) => {
	db.writeRSVP(req.body.name, req.body.message, (err, dbres) => {
		if (err) {
			console.log(err);
			res.status(500).json(err);
		} else {
			res.redirect('/rsvp');
		}
	});
});

module.exports = router;
