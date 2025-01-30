import { IsUUID, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsUUID()
  id: string;

  @IsString()
  role_name: string;
}
