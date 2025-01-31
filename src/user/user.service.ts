import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUserDto } from './dto/get.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { CreateUserDto } from './dto/create.user.dto';

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
        }) as GetUserDto;

        if(!user){
            throw new Error("User Not Found");
        }
         
        return user ;
    }catch(e){
      console.log(e);
    }
    }
  
    async searchUsers(query: string){
        try{ const user = await this.prismaService.user.findMany({
            where: {
                OR: [
                    { user_name: { contains: query, mode: 'insensitive' } },
                    { mail: { contains: query, mode: 'insensitive' } }
                ],
            },
        }) as unknown as GetUserDto;

        if(!user){
            throw new Error("User Not Found");
        }
    return user;
    }catch(e){
            console.log(e);
          }
    }
    
    async updateUser(id: string, data: UpdateUserDto){
        try{
            return this.prismaService.user.update({
                where: {id}, data
            })
        }catch(e){
            console.log(e);
        }
    }
}
