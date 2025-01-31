import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';


@Controller('user')
export class UserController {
    constructor(protected userService: UserService){}


    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser( createUserDto);
    }

    @Get('search')
    async searchUsers(@Query('q') q: string){
      return this.userService.searchUsers(q);
    }
    @Get('search/:id')
    async getUserById(@Param('id') id: string){
    return this.userService.getUserById(id);
    }

    
    @Patch(':id')
    async updateUser(@Param('id') id:string,@Body() updateUserDto:UpdateUserDto){
      return this.userService.updateUser(id,updateUserDto);
    }

}
