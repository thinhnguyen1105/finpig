const url = 'http://zimportant.ddns.net:3000/api/v1/member_ship';


export default class AuthService {

    getMemberShip(token: string, memberShip: string): Promise<any> {
        return fetch(`${url}/${memberShip}`, {
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
