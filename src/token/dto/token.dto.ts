import { IsUUID, IsString, IsOptional, IsDate } from 'class-validator';

export class CreateTokenDto {
  @IsUUID()
  user_id: string;

  @IsString()
  token: string;

  @IsString()
  refresh_token: string;

  @IsOptional()
  @IsString()
  device_info?: string;

  @IsOptional()
  @IsString()
  ip_address?: string;

  @IsDate()
  created_at: Date;

  @IsDate()
  expires_at: Date;
}
