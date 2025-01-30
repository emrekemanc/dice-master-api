import { IsUUID, IsString } from 'class-validator';

export class CreatePasswordDto {
  @IsUUID()
  user_id: string;

  @IsString()
  password_hash: string;

  @IsString()
  password_salt: string;
}
