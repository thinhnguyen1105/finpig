import { RegisterParam, LoginParam } from './interface.service';
const url = 'http://zimportant.ddns.net:3000/api/v1/auth';


export default class AuthService {

    register(params: RegisterParam): Promise<any> {
        return fetch(`${url}/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: params.name,
                username: params.username,
                password: params.password,
                age: params.age,
                phoneNumber: params.phoneNumber,
                email: params.email
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    login(params: LoginParam): Promise<any> {
        return fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: params.username,
                password: params.password,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

}
