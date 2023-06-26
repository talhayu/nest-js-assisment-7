import { EntityBase } from "src/base/base.entity";
import {Column, Entity} from "typeorm";
@Entity('user3')
export class User3  extends EntityBase{

    @Column()
    name:string

    @Column()
    age:number
}
