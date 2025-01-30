import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('emre')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('kemanci')
  getHello(): string {
    return this.appService.getHello();
  }
}
