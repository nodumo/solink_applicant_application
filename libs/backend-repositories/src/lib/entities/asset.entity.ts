import {BaseEntity} from "./base-entity.entity";
import {Entity, Property} from "@mikro-orm/core";
import {AssetI} from "@acme-security/domain";

@Entity({
  tableName: 'assets'
})
export class Asset extends BaseEntity implements AssetI {
  @Property({type: 'text'})
  name = ''

  @Property({type: 'text'})
  description = ''
}
