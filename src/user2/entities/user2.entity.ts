import { EntityBase } from "src/base/base.entity";
import {Column, Entity} from "typeorm";
@Entity('user2')
export class User2  extends EntityBase{

    @Column()
    name:string

    @Column()
    age:number
}
