Except login & register, all queries require TOKEN

email:
finpig2018@gmail.com
hackjunction_finpig@2018

API:
/user
	/{id} GET -> {
		request_status: [success, failure]
		info: {
			id: String
			name: String
			username: String

			age: Number
			avatar: String (url)
			exp: Number
			groups: Array(GROUP_ID)

			transactions: Array(TRANSACTION_ID) // transaction of user
		}
	}

	/{id}/group GET -> {
		request_status: [success, failure]
		info: {
			group: Array(GROUP_ID)
		}
	}

	/login POST username, password -> {
		request_status: [success, failure]
		info: {
			token: String,
		}
	}

	/register POST username, password, phone_number, email -> {
		request_status: [success, failure]
		info: {
			status: // Username already exists, Password not secure
			token: String,
		}
	}

/group
	/{id} GET -> {
	id: String
	name: String
	description: String
	goal: Number
	user: Array(USER_ID)
	budget: BUDGET_ID

	transactions: Array(TRANSACTION_ID) //transaction of group
}

/transaction POST {
		token: {}

		tag: [saving, expense]
		type: [individual, group]
		receiver_id: {}
		amount: {} (USD)

	} ---> {
		status: [success, failure]
		info: {
			transaction: TRANSACTION_ID
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
	group: Array(GROUP_ID)
	budget: BUDGET_ID

	banking_card: {
		type: [VISA]
		card_id: Number
		cvc: Number
	}
}

Group {
	_id: String
	name: String
	description: String
	goal: Number
	users: Array(USER_ID)
	budget: BUDGET_ID
}

Budget {
	_id: String
	owner: OWNER_ID
	saving: Number
	expense: Number
}

Owner {
	_id: String
	ownerType: [user, group,finpig]
	ownerId: String [GROUP_ID, USER_ID,”FinPig”]
}

Transaction { //buy goods, save money
	_id: String
	sender: BUDGET_ID
	receiver: BUDGET_ID
	date: date
	amount: {} USD
	status: [success, failure, pending]
}
