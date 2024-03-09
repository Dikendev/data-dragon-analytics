import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Challenger } from './challenger.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Challenger[]> {
    return this.appService.getHello();
  }
}
