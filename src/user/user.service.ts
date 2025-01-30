import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(protected prismaService: PrismaService){}

    async createUser(createUserDto: CreateUserDto){
        try{return this.prismaService.user.create({
            data: createUserDto,
        });
        }catch(e){
        console.log(e);
      }
    }

    async getUserById(userId: string){
        try{ const user = await this.prismaService.user.findUnique({
            where: {id: userId}
        }) as CreateUserDto;

        if(!user){
            throw new Error("User Not Found");
        }
        return user;
    }catch(e){
      console.log(e);
    }
    }

    async getUserByUserName(userName: string){
        try{ const user = await this.prismaService.user.findUnique({
            where: {user_name: userName}
        }) as CreateUserDto;

        if(!user){
            throw new Error("User Not Found");
        }
        return user;
    }catch(e){
      console.log(e);
    }
       
    }

}
