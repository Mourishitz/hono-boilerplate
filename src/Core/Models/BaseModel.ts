import { Model, ModelOptions, QueryContext } from "objection";

export default abstract class BaseModel extends Model {
  static idColumn: string | string[] = "id";

  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at: Date | null;


  public softDeletes(): boolean {
    return true;
  }

  $afterUpdate(opt: ModelOptions, queryContext: QueryContext): Promise<any> | void {
    this.updated_at = new Date();
  }
}
