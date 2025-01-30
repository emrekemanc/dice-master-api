import { Injectable } from '@nestjs/common';
import { Status } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(protected prismaService: PrismaService){}

    async createUser(
        firstName: string,
        lastName: string,
        userName: string,
        mail: string,
        birthDate: Date,
        msisdn: string,
        status: Status = Status.ACTIVE
    ){
        return this.prismaService.user.create({
            data: {
                firstName,
                lastName,
                userName,
                mail,
                birthDate,
                msisdn,
                status,
            },
        });
    }

    async getUserById(userId: string){
        const user = await this.prismaService.user.findUnique({
            where: {id: userId}
        })
        if(!user){
            throw new Error("User Not Found")
        }
        return user
    }
    async getUserByUserName(userName: string){
        const user = await this.prismaService.user.findUnique({
            where: {userName: userName}
        })
    }

}
