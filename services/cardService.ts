import { Service } from './index';
import { Card } from '../domains/cards/card';
import { URL } from 'url';

class CardService implements Service<Card> {}
// eslint-disable-next-line @typescript-eslint/ban-types
async function getCard(params: object): Promise<object> {
  const url = new URL('https://api.trello.com/1/cards/');
  url.search = new URLSearchParams(params.toString()).toString();
  const headers = {
    Accept: 'application/json',
  };
  const response = await fetch(url.toString(), { headers });
  return await response.json();
}
const params = {
  key: '90758d9be2ee9eb500d0195de2945823',
  token: 'cb8f25cd27ac835b262402ba10c119fbd8416a56208a84970ec6abe7354062c5',
  idList: '609c623ca3633f333109e526',
};

(async () => {
  const data = await getCard(params);
  // eslint-disable-next-line no-console
  console.log(data);
})();
