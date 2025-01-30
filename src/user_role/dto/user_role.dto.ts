import { IsUUID, IsOptional, IsDate } from 'class-validator';

export class CreateUserRoleDto {
  @IsUUID()
  user_id: string;

  @IsUUID()
  role_id: string;

  @IsOptional()
  @IsDate()
  deleted_at?: Date;
}
