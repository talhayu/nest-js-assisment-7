import { EntityBase } from "src/base/base.entity";
import {Column, Entity} from "typeorm";
@Entity('user4')
export class User4  extends EntityBase{

    @Column()
    name:string

    @Column()
    age:number
}

