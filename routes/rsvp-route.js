'use strict'

const express = require('express');
const router = express.Router();

const db = require('./rsvp-db');

router.get('/', (req, res) => {
	db.readRSVPs((err, rsvps) => {
		res.status(200).json(rsvps);		
	});
});

router.post('/', (req, res) => {
	const rsvp = { name: "JENS" };
	db.writeRSVP(rsvp.name, (err, rsvps) => {
		res.status(200).json(rsvps);		
	});
});

module.exports = router;
