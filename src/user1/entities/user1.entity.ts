import { EntityBase } from "src/base/base.entity";
import {Column, Entity} from "typeorm";
@Entity('user1')
export class User1  extends EntityBase{

    @Column()
    name:string

    @Column()
    age:number
}