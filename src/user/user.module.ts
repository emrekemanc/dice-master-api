import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PasswordModule } from 'src/password/password.module';

@Module({
  imports: [PrismaModule,PasswordModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
