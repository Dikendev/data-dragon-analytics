import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataDragonModule } from './main/use-case/manage-data-dragon-files/data-dragon.module';

@Module({
  imports: [DataDragonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
