import {BaseEntity} from "./base-entity.entity";
import {Property} from "@mikro-orm/core";

export class Asset extends BaseEntity {
  @Property({type: 'text'})
  name = ''

  @Property({type: 'text'})
  description = ''
}
