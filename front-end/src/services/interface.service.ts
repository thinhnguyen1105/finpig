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