import { Module } from '@nestjs/common';
import { VerifiedService } from './verified.service';

@Module({
  providers: [VerifiedService]
})
export class VerifiedModule {}
