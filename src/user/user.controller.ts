import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Status } from '@prisma/client';
import { first } from 'rxjs';

@Controller('user')
export class UserController {
    constructor(protected userService: UserService){}


    @Post('create')
    async createUser(@Body() body:{
        firstName: string;
        lastName: string;
        userName: string;
        mail: string;
        birthDate: Date;
        msisdn: string;
        status: Status;

    }){
        return this.userService.createUser(
            body.firstName,
            body.lastName,
            body.userName,
            body.mail,
            body.birthDate,
            body.msisdn,
            body.status || Status.ACTIVE
        )
    }

}
