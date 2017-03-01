'use strict'

const pg = require('pg');

pg.defaults.ssl = true;


function db(callback) {
	pg.connect(process.env.DATABASE_URL, function(err, client) {
  	callback(err, client);
	});
}

db((err, client) => {
	const createTable = "CREATE TABLE IF NOT EXISTS rsvp (" +
												"id SERIAL PRIMARY KEY,"
												"name varchar(255) NOT NULL," + 
												"time INTEGER NOT NULL"
											");"
	client.query(createTable, (err, res) => {
		if (err) {
			console.log(`create table error: ${err}`);	
		} else {
			console.log('create table success');
		}
	})
});

function writeRSVP(name, callback) {
	db((err, client) => {
		client.query('INSERT INTO rsvp VALUES (DEFAULT, $1, $2)', [ name, Date.now() ], (err, res) => {
			callback(err, res);
		});
	});
}

function readRSVPs(callback) {
	db((err, client) => {
		client.query('SELECT * FROM rsvp', (err, res) => {
			callback(err, res.rows);
		});
	});
}

module.exports = {
	writeRSVP,
	readRSVP
};
