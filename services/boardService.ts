import { Service } from './index';
import { Board, BoardParams } from '../domains/boards/board';
import supertest from 'supertest';

export class BoardService implements Service<Board> {
  private params: BoardParams;

  constructor(params: BoardParams) {
    this.params = params;
    this.client = supertest('https://api.trello.com/1/boards');
  }

  private client;

  async create(obj: Board): Promise<Board> {
    const request = await this.client
      .post('/')
      .set('Accept', 'application/json')
      .query({
        key: this.params.key,
        token: this.params.token,
      })
      .send(obj)
      .expect(200);
    return request.body as Board;
  }

  async findOne(id: string): Promise<Board> {
    const request = await this.client
      .get(`/${id}`)
      .set('Accept', 'application/json')
      .query({
        key: this.params.key,
        token: this.params.token,
      })
      .expect(200);
    return request.body as Board;
  }

  async delete(id: string) {
    const request = await this.client
      .delete(`/${id}`)
      .set('Accept', 'application/json')
      .query({
        key: this.params.key,
        token: this.params.token,
      })
      .expect(200);
    return request.body as Board;
  }

  async update(id: string, obj: Board): Promise<Board> {
    const request = await this.client
      .put(`/${id}`)
      .set('Accept', 'application/json')
      .query({
        key: this.params.key,
        token: this.params.token,
      })
      .send(obj)
      .expect(200);
    return request.body as Board;
  }
}
