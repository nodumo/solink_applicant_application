import {Entity, PrimaryKey, Property} from "@mikro-orm/core";

export interface BaseTypeEntityEntityI {
  id: string
  nameKey: string
  nameEng: string
}

@Entity({
  abstract: true
})
export class BaseTypeEntityType implements BaseTypeEntityEntityI {

  @PrimaryKey()
  id = ''

  @Property({columnType: 'text'})
  nameKey = ''

  @Property({columnType: 'text'})
  nameEng = ''
}
