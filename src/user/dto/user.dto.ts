import { IsUUID, IsString, IsEmail, IsOptional, IsDate, IsEnum } from 'class-validator';
import { Status } from '@prisma/client';

export class CreateUserDto {
  @IsUUID()
  id: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  user_name: string;

  @IsEmail()
  mail: string;

  @IsDate()
  birth_date: Date;

  @IsString()
  msisdn: string;

  @IsOptional()
  @IsDate()
  deleted_at?: Date;

  @IsOptional()
  @IsDate()
  last_login?: Date;

  @IsEnum(Status)
  status?: Status;
}
