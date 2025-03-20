import BaseModel from "@Models/BaseModel";
import { IRead } from "@Interfaces/ReadInterface";
import { IWrite } from "@Interfaces/WriteInterface";
import { ModelClass } from "objection";

export default abstract class BaseRepository<M> implements IWrite<M>, IRead<M> {
  public readonly model: ModelClass<BaseModel>;

  constructor(model: ModelClass<BaseModel>) {
    this.model = model;
  }

  async create(item: object): Promise<M> {
    return await this.model.query().insert(item) as M;
  }
  async update(id: string, item: object): Promise<M> {
    return await this.model.query().updateAndFetchById(id, item) as M;
  }
  async delete(id: string): Promise<boolean> {
    return Boolean(await this.model.query().findById(id).update({ deleted_at: new Date() }).execute());
  }
  async all(): Promise<M[]> {
    return this.model.query().whereNull('deleted_at') as unknown as M[];
  }

  async find(id: string | number): Promise<M | null> {
    return await this.model.query().findById(id) as M;
  }

}
