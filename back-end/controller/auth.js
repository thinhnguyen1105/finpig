const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const Budget = mongoose.model('Budget');
const BankingCard = mongoose.model('BankingCard');
const { sendFailure, sendSuccess, verifyJwt } = require('./helper');

async function register(req, res) {
    let data = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    }

    if (!validateUsername(data.username)) {
        return sendFailure(res, false, {
            info: 'Please enter valid username'
        });
    }

	try {
		let user = await User.find({ username: data.username }).exec();
		if (user.length) {
            return sendFailure(res, false, {
                info: 'This username is already in use'
            });
		}
	} catch (err) {
		if (err) {
			return sendFailure(res, false);
		}
    }
    
    if (!validatePassword(data.password)) {
        return sendFailure(res, false, {
            info: 'Password is too short (enter at least 6 characters)!'
        });
    }

	data.password = bcrypt.hashSync(data.password, 8);

	User.create(data, async function(err, user) {
		if (err) {
			return sendFailure(res, false);
		}
		let token = jwt.sign({ id: user._id }, process.env.SECRET, {
			expiresIn: process.env.TOKEN_EXPIRES
		});

		try {
			let budget = await Budget.create({
				ownerType: 'user',
				ownerId: user._id,
				saving: 0,
				expense: 0,
				balance: 0
			});
			let bankingCard = await BankingCard.create({
				fullName: '',
				cardType: '',
				cardId: '',
				securityCode: ''
			});
			user.budget = budget._id;
			user.bankingCard = bankingCard._id;

			let updatedUser = await user.save();

			return sendSuccess(res, true, {
				token: token,
				userId: user._id
			});
		} catch (err) {
			if (err) {
				return sendFailure(res, false);
			}
		}
	});
}

function validateUsername(username) {
	return !!username && username.toString().length !== 0;
}

function validatePassword(password) {
	return !!password && password.toString().length >= 6;
}

function login(req, res) {
	let username = req.body.username;
	let password = req.body.password;

	User.findOne({ username: username }, (err, user) => {
		if (err) {
			return sendFailure(res, false);
		}

		if (!user) {
			return sendFailure(res, false);
		}

		let isPasswordValid = bcrypt.compareSync(password, user.password);
		if (!isPasswordValid) {
			return sendFailure(res, false);
		}

		let token = jwt.sign({ id: user._id }, process.env.SECRET, {
			expiresIn: process.env.TOKEN_EXPIRES
        });
        return sendSuccess(res, true, {
            token: token,
            userId: user._id
        });
	});
}

module.exports = {
	login,
	register
}