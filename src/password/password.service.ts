import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePasswordDto } from './dto/password.dto';

@Injectable()
export class PasswordService {
    constructor(private prismaService: PrismaService) {}

    async hashPassword(password: string) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return { hashedPassword, salt };
    }

    async createPassword(createPasswordDto: CreatePasswordDto) {
        return this.prismaService.password.create({
            data: createPasswordDto,
        });
    }
    async validatePassword(userId: string, password: string){
       try{ const data = await this.prismaService.password.findUnique({
            where: {user_id: userId},
        });

        if(!data){
            return false;

        }
        const hashInputPassword = await bcrypt.hash(password,data.password_salt)
        return hashInputPassword === data.password_hash;
    }catch(e){
            console.log(e)
        }

    }
}
