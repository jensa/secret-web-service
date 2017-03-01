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
	const rsvp = { name: "JENS" };
	db.writeRSVP(rsvp.name, (err, dbres) => {
		if (err) {
			res.status(500).json(err);
		} else {
			res.status(200).json(dbres);
		}
	});
});

module.exports = router;
