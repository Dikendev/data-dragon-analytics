import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Challenger } from './main/use-case/manage-data-dragon-files/interfaces/challenger.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Challenger[]> {
    return this.appService.getHello();
  }
}
