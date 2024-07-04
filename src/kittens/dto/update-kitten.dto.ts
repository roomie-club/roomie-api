import { PartialType } from '@nestjs/mapped-types';
import { CreateKittenDto } from './create-kitten.dto';

export class UpdateKittenDto extends PartialType(CreateKittenDto) {}
