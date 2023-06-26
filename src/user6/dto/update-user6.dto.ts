import { PartialType } from '@nestjs/mapped-types';
import { CreateUser6Dto } from './create-user6.dto';

export class UpdateUser6Dto extends PartialType(CreateUser6Dto) {}
