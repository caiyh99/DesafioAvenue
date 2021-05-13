export interface Service<T> {
  findOne(id: string): Promise<T>;
  delete(id: string): void;
  update(id: string, obj: T): Promise<T>;
  create(obj: T): Promise<T>;
}
