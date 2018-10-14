const url = 'http://zimportant.ddns.net:3000/api/v1/user';

export default class AuthService {

    getUser(token: string, userId: string): Promise<any> {
        return fetch(`${url}/${userId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

<<<<<<< HEAD
    editUser(token: string, userId: string): Promise<any> {
        return fetch(`${url}/${userId}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

=======
>>>>>>> 71e2bf4a63e808e19a2a69c199f939aa3e7b0370
    getUserGroup(token: string, userId: string): Promise<any> {
        return fetch(`${url}/${userId}/groups`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },
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
