export interface Service<T> {
  findOne(id: string, statusCode: number): Promise<T>;
  delete(id: string, statusCode: number): void;
  update(id: string, obj: T, statusCode: number): Promise<T>;
  create(obj: T, statusCode: number): Promise<T>;
}
