import { EntityBase } from "src/base/base.entity";
import {Column, Entity} from "typeorm";
@Entity('user5')
export class User5  extends EntityBase{

    @Column()
    name:string

    @Column()
    age:number
}
