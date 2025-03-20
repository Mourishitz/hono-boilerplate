export interface IWrite<M> {
  create(item: object): Promise<M>;
  update(id: string, item: object): Promise<M>;
  delete(id: string): Promise<boolean>;
}
