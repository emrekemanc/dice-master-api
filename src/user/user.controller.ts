import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Status } from '@prisma/client';
import { CreateUserDto } from './dto/user.dto';


@Controller('user')
export class UserController {
    constructor(protected userService: UserService){}


    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(
          createUserDto
        )
    }

}
