export interface RegisterParam {
    name: string;
    username: string;
    password: string;
    age: string;
    phoneNumber: string;
    email: string;

}

export interface LoginParam {
    username: string;
    password: string;
}

export interface GetUserParam {
    token: string;
    userId: string;
}

export interface GetBudgetParam {
    token: string;
    budgetId: string;
}

export interface CreateGroupParams {
    name: string;
    description: string;
    goal: number;
    startDate: Date;
    endDate: Date;
    userIds: string[];
}

export interface CreateBankParams {
    sender: string;
    receiver: string;
    amount: object;

}

export interface CreateTransferParams {
    sender: string;
    receiver: string;
    receiverType: ['saving', 'expense'];
    amount: object;
}