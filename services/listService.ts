import { Service } from './index';
import { List, ListParams } from '../domains/lists/list';
import supertest from 'supertest';
import {Board} from "../domains/boards/board";

export class ListService implements Service<List> {
  private params: ListParams;

  constructor(params: ListParams) {
    this.params = params;
    this.client = supertest('https://api.trello.com/1/lists');
  }

  private client;

  async create(obj: List): Promise<List> {
    const request = await this.client
      .post('/')
      .set('Accept', 'application/json')
      .query({
        key: this.params.key,
        token: this.params.token,
      })
      .send(obj)
      .expect(200);
    return request.body as List;
  }

  async findOne(id: string): Promise<List> {
    const request = await this.client
      .get(`/${id}`)
      .set('Accept', 'application/json')
      .query({
        key: this.params.key,
        token: this.params.token,
      })
      .expect(200);
    return request.body as List;
  }

  async update(id: string, obj: List): Promise<List> {
    const request = await this.client
      .put(`/${id}`)
      .set('Accept', 'application/json')
      .query({
        key: this.params.key,
        token: this.params.token,
      })
      .send(obj)
      .expect(200);
    return request.body as List;
  }

  async delete(id: string) {
    const request = await this.client
      .put(`/${id}/closed`)
      .set('Accept', 'application/json')
      .query({
        key: this.params.key,
        token: this.params.token,
        value: 'true',
      })
      .expect(200);
    return request.body as Board;
  }
}
