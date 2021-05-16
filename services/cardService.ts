import { Service } from './index';
import { Card, CardParams } from '../domains/cards/card';
import supertest from 'supertest';

export class CardService implements Service<Card> {
  private params: CardParams;

  constructor(params: CardParams) {
    this.params = params;
    this.client = supertest('https://api.trello.com/1/cards');
  }

  private client;

  async create(obj: Card, statusCode = 200): Promise<Card> {
    const request = await this.client
      .post('/')
      .set('Accept', 'application/json')
      .query({
        key: this.params.key,
        token: this.params.token,
        idList: this.params.idList,
      })
      .send(obj)
      .expect(statusCode);
    return request.body as Card;
  }

  async findOne(id: string, statusCode = 200): Promise<Card> {
    const request = await this.client
      .get(`/${id}`)
      .set('Accept', 'application/json')
      .query({
        key: this.params.key,
        token: this.params.token,
      })
      .expect(statusCode);
    return request.body as Card;
  }

  async delete(id: string, statusCode = 200) {
    const request = await this.client
      .delete(`/${id}`)
      .set('Accept', 'application/json')
      .query({
        key: this.params.key,
        token: this.params.token,
      })
      .expect(statusCode);
    return request.body as Card;
  }

  async update(id: string, obj: Card, statusCode = 200): Promise<Card> {
    const request = await this.client
      .put(`/${id}`)
      .set('Accept', 'application/json')
      .query({
        key: this.params.key,
        token: this.params.token,
        idList: this.params.idList,
      })
      .send(obj)
      .expect(statusCode);
    return request.body as Card;
  }
}
