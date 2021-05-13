export interface Service<T> {
  findAll(): Array<T>
  findOne(): T
  delete(): void
  update(): T
  create(): T
}