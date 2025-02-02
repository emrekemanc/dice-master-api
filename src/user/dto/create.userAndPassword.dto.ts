import { IsString } from "class-validator";
import { CreateUserDto } from "./create.user.dto";

export class CreateUserWithPasswordDto extends CreateUserDto {
    @IsString()
    password: string;
  }