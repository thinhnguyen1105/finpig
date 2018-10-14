<<<<<<< HEAD
import { CreateGroupParams } from './interface.service';
const url = 'http://zimportant.ddns.net:3000/api/v1/group';

export default class GroupService {
=======
const url = 'http://zimportant.ddns.net:3000/api/v1/group';

export default class AuthService {
>>>>>>> 71e2bf4a63e808e19a2a69c199f939aa3e7b0370

    getGroup(token: string, groupId: string): Promise<any> {
        return fetch(`${url}/${groupId}`, {
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
    createGroup(params: CreateGroupParams, token: string): Promise<any> {
        return fetch(`${url}`, {
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
=======
>>>>>>> 71e2bf4a63e808e19a2a69c199f939aa3e7b0370
}
