import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PasswordModule } from './password/password.module';
import { RoleModule } from './role/role.module';
import { UserRoleModule } from './user_role/user_role.module';
import { VerifiedModule } from './verified/verified.module';
import { TokenModule } from './token/token.module';

@Module({
  imports: [UserModule, PrismaModule, PasswordModule, RoleModule, UserRoleModule, VerifiedModule, TokenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
