import { Module } from '@nestjs/common';
import { PasswordService } from './password.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], 
  providers: [PasswordService],
  exports: [PasswordService], 
})
export class PasswordModule {}
