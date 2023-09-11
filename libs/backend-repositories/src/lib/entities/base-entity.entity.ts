import {Entity, PrimaryKey, Property} from "@mikro-orm/core";
import { v4 as uuidv4 } from 'uuid';

export interface BaseEntityI {
  id: string
  dateTimeCreated: Date
  dateTimeDeleted?: Date | null
  dateTimeUpdated: Date
}

@Entity({
  abstract: true
})
export class BaseEntity implements BaseEntityI {

  @PrimaryKey()
  id = uuidv4()

  @Property({onCreate: () => new Date()})
  dateTimeCreated: Date = new Date()

  @Property({nullable: true})
  dateTimeDeleted: Date | null = null

  @Property({onUpdate: () => new Date()})
  dateTimeUpdated: Date = new Date()

}
