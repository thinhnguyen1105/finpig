import { CreateBankParams, CreateTransferParams } from './interface.service';
const url = 'http://zimportant.ddns.net:3000/api/v1/transaction';

export default class AuthService {

  createBank(token: string, params: CreateBankParams): Promise<any> {
    return fetch(`${url}/bank`, {
      method: 'POST',
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

  createTransfer(token: string, params: CreateTransferParams): Promise<any> {
    return fetch(`${url}/transfer`, {
      method: 'POST',
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
