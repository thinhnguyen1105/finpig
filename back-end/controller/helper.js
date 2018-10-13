const jwt = require('jsonwebtoken');

function sendFailure(res, auth=true, data={}) {
	res.json({
		status: 'failure',
		auth: auth,
		data: data
	})
}

function sendSuccess(res, auth=true, data={}) {
	res.send({
		status: 'success',
		auth: auth,
		data: data
	});
}

function verifyJwt(req, res, cb) {
	let token = req.headers['x-access-token'];
	if (!token) {
		sendFailure(res, false);
		return;
	}

	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if (err) {
			sendFailure(res, false);
			return;
		}

		cb(decoded.id);
	});
}

module.exports = {
	sendSuccess,
	sendFailure,
	verifyJwt
};