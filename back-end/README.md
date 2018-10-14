
Except login & register, all queries require:
headers['x-access-token'] = ${TOKEN}
url : http://zimportant.ddns.net:3000/api/v1/
email:
finpig2018@gmail.com
hackjunction_finpig@2018

balance: bank to balance
expense: balance to expense
saving: balance to saving

API:
/user
	//get user information
	/{userId} GET -> {
		status: [success, failure],
		auth: [true/false],
		data: {
			_id: String
			name: String
			username: String

			age: Number
			avatar: String (url)
			exp: Number
			email: String
			groups: Array(GROUP_ID)
			budget: BUDGET_ID

			transactions: Array(TRANSACTION_ID) // transaction of user
		}
	}

	//update user information
	/{userId} PUT {
			//update info
		} ---> {
			status: [success, failure],
			auth: [true/false],
			data: {
				_id: String
				name: String
				username: String

				age: Number
				avatar: String (url)
				exp: Number
				email: String
				groups: Array(GROUP_ID)
				budget: BUDGET_ID

				transactions: Array(TRANSACTION_ID) // transaction of user
				purchasedMemberShip: Array(MEMBER_SHIP_ID)
			}
		}

	//get list groups of user with specific ID
	/{userId}/groups GET -> {
		status: budg[success, failure],
		auth: [true/false]
		data: {
			groups: Array(GROUP_ID)
		}
	}

	//get list memberShip of user with specific ID
	/{userId}/member_ships GET -> {
		status: [success, failure],
		auth: [true/false]
		data: {
			memberShips: Array(MEMBER_SHIP_ID)
		}
	}

/auth
	//login user
	/login POST username, password -> {
		status: [success, failure],
		auth: [true/false]
		data: {
			info: //detail info of status 'failure'
			token: TOKEN
		}
	}

	//register user
	/register POST {
		name,
		username, 
		password, 
		age,
		phoneNumber, 
		email
	} ---> {

		status: [success, failure]
		auth: [true/false]
		data: {
			info: //detail info of status 'failure'
			token: TOKEN
			userId: USER_ID
		}
	}

/group
	// create new Group
	/ POST {
		name: String
		description: String
		goal: Number
		startDate: Date
		endDate: Date
		userIds: Array(USER_ID) //exclude sender
	} --> {
		status: [success, failure],
		auth: [true/false]
		data: {
			_id: String
			name: String
			description: String
			goal: Number
			userIds: Array(USER_ID)
			budget: BUDGET_ID
		}
	}
	// get information of group
	/{groupId} GET -> {
		status: [success, failure],
		auth: [true/false]
		data: {
			_id: String
			name: String
			description: String
			goal: Number
			user: Array(USER_ID)
			budget: BUDGET_ID

			transactions: Array(TRANSACTION_ID) //transaction of group
		}
	}

	//add member
	/{groupId} PUT {
		action: 'add'
		userId: USER_ID
	} --> {
		status:
		auth:
	}
	//delete member
	/{groupId} PUT {
		action: 'remove'
		userId: USER_ID
	} --> {
		status:
		auth:
	}

/budget
	//get information of a budget with budgetId
	/{budgetId} GET -> {
		status: [success, failure]
		auth: [true/false]
		data: {
			_id: String
			ownerType: [user, group]
			ownerId: String [GROUP_ID, USER_ID]
			saving: Number
			balance: Number
			expense: Number
		}
	}

/transaction 
	// transfer from banking card to finpig user
	/bank POST {
		sender: BUDGET_ID
		receiver: BUDGET_ID
		amount: {} (USD)
	} ---> {
		status: [success, failure]
		auth: [true/false]
		data: {
			sender: BUDGET_ID
			receiver: BUDGET_ID
			date: date
			amount: {} USD
			type: [saving, expense, balance]
			status: [success, failure, pending]
		}
	}
	// tranfer between user in finpig
	/transfer POST { //user -> saving, expense
		sender: BUDGET_ID
		receiver: BUDGET_ID
		receiverType: ['saving', 'expense']
		amount: {} (USD)
	} ---> {
		status: [success, failure]
		auth: [true/false]
		data: {
			sender: BUDGET_ID
			receiver: BUDGET_ID
			date: date
			amount: {} USD
			type: [saving, expense]
			status: [success, failure, pending]
		}
	}

/member_ship
	//list memberShips which user can purchase
	/ GET -> {
		status,
		auth,
		data: {
			silver: {
				total: Number,
				saving: Number,
				purchaseDate: Date,
				cardType: String,
				timeLimit: Days
			},
			gold: ...
			diamond: ...
		}
	}
	//purchase a memberShip with type
	/ POST {
		cardType: 'silver', 'gold', 'diamond'
	}
	----> {
		status
		auth
	}

	//get infor purchused memberShip with memberShipId
	/{memberShipId} GET -> {
		status,
		auth,
		data: {
			total: Number,
			saving: Number,
			purchaseDate: Date,
			cardType: String,
			timeLimit: Days
		}
	}

DATABASE:
User {
	_id: String
	name: String
	username: String
	password: String [encrypt]

	age: String
	avatar: String (url)
	exp: Number
	groups: Array(GROUP_ID)
	budget: BUDGET_ID
	bankingCard: CARD_ID

	purchasedMemberShip: Array(MEMBER_SHIP_ID)
}

MemberShip: {
	total: Number,
	saving: Number,
	purchaseDate: Date,
	cardType: String,
	timeLimit: Days
}

BankingCard: {
	_id: String
	fullName: String
	cardType: String
	cardId: String
	securityCode: String
}

Group {
	_id: String
	name: String
	description: String
	goal: Number
	managerId: USER_ID
	startDate: String
	endDate: String
	userIds: Array(USER_ID)
	budget: BUDGET_ID
}

Budget {
	_id: String
	ownerType: [user, group]
	ownerId: String [GROUP_ID, USER_ID]
	saving: Number
	balance: Number
	expense: Number
}

Transaction { //buy goods, save money
	_id: String
	sender: BUDGET_ID
	receiver: BUDGET_ID
	date: date
	amount: {} USD
	type: [saving, expense, balance]
	status: [success, failure, pending]
}

TotalExchange {
	_id: String
	sender: BUDGET_ID
	receiver: BUDGET_ID
	date: date
	amount: {} USD
}