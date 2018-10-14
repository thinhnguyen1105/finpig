export interface UserState {
   info: UserInfo,
   token: string;
}

export interface UserInfo {
    avatar: string;
    exp: number;
    groups: string[],
    transaction: string[],
    _id: string;
    name: string;
    username: string;
    age: number;
    budget: string;
    __v: number
}
