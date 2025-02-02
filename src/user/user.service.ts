import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUserDto } from './dto/get.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { CreateUserDto } from './dto/create.user.dto';
import { PasswordService } from 'src/password/password.service';
import { CreatePasswordDto } from 'src/password/dto/password.dto';
import { LoginUserDto } from './dto/login.user.dto';

@Injectable()
export class UserService {
    constructor(protected prismaService: PrismaService, private passwordService: PasswordService){}

    async createUser(createUserDto: CreateUserDto, password: string) {
        try {
            const { hashedPassword, salt } = await this.passwordService.hashPassword(password);

            const user = await this.prismaService.user.create({
                data: createUserDto,
            });

            const createPasswordDto: CreatePasswordDto = {
                user_id: user.id,
                password_hash: hashedPassword,
                password_salt: salt,
            };
            await this.passwordService.createPassword(createPasswordDto);

            return user;
        } catch (e) {
            console.error('Error creating user:', e);
            throw new Error(e.message);
        }
    }
    async loginUser(loginUserDto: LoginUserDto){
        try{const user = await this.prismaService.user.findUnique({
            where: {mail: loginUserDto.mail}
        });
        if(!user){
            throw new Error("This mail not found")
        }
            const pass = await this.passwordService.validatePassword(user.id,loginUserDto.password);
            if(!pass){
                throw new Error("Password is wrong")
            }
            return user
        }catch(e){
            console.log(e)
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
