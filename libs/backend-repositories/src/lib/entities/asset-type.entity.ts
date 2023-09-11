import {BaseTypeEntityType} from "./base-type-entity.entity";
import {Entity} from "@mikro-orm/core";


@Entity({
  tableName: 'asset_types'
})
export class AssetType extends BaseTypeEntityType {}
