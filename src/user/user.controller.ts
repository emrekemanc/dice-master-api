import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update.user.dto';
import { CreateUserWithPasswordDto } from './dto/create.userAndPassword.dto';
import { LoginUserDto } from './dto/login.user.dto';


@Controller('user')
export class UserController {
    constructor(protected userService: UserService){}


    @Post('register')
    async createUser(@Body() createUserWithPasswordDto: CreateUserWithPasswordDto ){
      const {password, ...userdata} = createUserWithPasswordDto
        return this.userService.createUser( userdata, createUserWithPasswordDto.password);
    }
    @Post('login')
    async loginUser(@Body() loginUserDto: LoginUserDto){
      return this.userService.loginUser(loginUserDto);
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
