const url = 'http://zimportant.ddns.net:3000/api/v1/budget';

export default class BudgetService {

  getBudget(token: string, budgetId: string): Promise<any> {
    return fetch(`${url}/${budgetId}`, {
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
