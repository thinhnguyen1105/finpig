const mongoose = require('mongoose');
require('./model');

async function doConnect() {
   	let user = process.env.DB_USER;
	let pass = process.env.DB_PASS;
	let host = process.env.DB_HOST;
	let port = process.env.DB_PORT;
	let dbName = process.env.DB_NAME;
	let serverUrl = `mongodb://${user}:${pass}@${host}:${port}/${dbName}`;
	try {
		let ret = await mongoose.connect(serverUrl, { useNewUrlParser: true });
		console.log('connected to database');
	} catch (err) {
		if (err) {
			throw err;
		}
	}
}

module.exports = doConnect;