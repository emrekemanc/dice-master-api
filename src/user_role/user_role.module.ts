import { Module } from '@nestjs/common';
import { UserRoleService } from './user_role.service';

@Module({
  providers: [UserRoleService]
})
export class UserRoleModule {}
