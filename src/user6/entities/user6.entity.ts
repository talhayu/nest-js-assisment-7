import { EntityBase } from "src/base/base.entity";
import {Column, Entity} from "typeorm";
@Entity('user6')
export class User6  extends EntityBase{

    @Column()
    name:string

    @Column()
    age:number
}
