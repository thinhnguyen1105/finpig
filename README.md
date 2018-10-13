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
			}
		}

	/{userId}/groups GET -> {
		status: [success, failure],
		auth: [true/false]
		data: {
			groups: Array(GROUP_ID)
		}
	}

/auth
	/login POST username, password -> {
		status: [success, failure],
		auth: [true/false]
		data: {
			info: //detail info of status 'failure'
			token: TOKEN
		}
	}

	/register POST {
		name,
		username, 
		password, 
		age,
		phoneNumber, 
		email
	} ---> {

		status: [success, failure],
		auth: [true/false]
		data: {
			info: //detail info of status 'failure'
			token: TOKEN
			userId: USER_ID
		}
	}

/group
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

/budget
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

// get from card to finpig
/transaction 
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
}

BankingCard: {
	_id: String
	cardType: ['visa']
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