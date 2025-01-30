import { IsUUID, IsBoolean, IsOptional, IsDate } from 'class-validator';

export class CreateVerifiedDto {
  @IsUUID()
  user_id: string;

  @IsBoolean()
  mail_verified: boolean;

  @IsBoolean()
  phone_verified: boolean;

  @IsOptional()
  @IsDate()
  mail_verified_at?: Date;

  @IsOptional()
  @IsDate()
  phone_verified_at?: Date;
}
