import { EntityBase } from "src/base/base.entity";
import {Column, Entity} from "typeorm";
@Entity('user')
export class UserEntity  extends EntityBase{

    @Column()
    name:string

    @Column()
    age:number
}