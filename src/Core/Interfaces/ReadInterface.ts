export interface IRead<M> {
  all(): Promise<M[]>;
  find(id: string | number): Promise<M | null>;
}
