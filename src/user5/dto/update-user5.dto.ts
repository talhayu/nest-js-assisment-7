import { PartialType } from '@nestjs/mapped-types';
import { CreateUser5Dto } from './create-user5.dto';

export class UpdateUser5Dto extends PartialType(CreateUser5Dto) {}
