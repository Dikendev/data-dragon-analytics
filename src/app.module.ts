import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataDragonModule } from './main/use-case/data-dragon.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DataDragonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
