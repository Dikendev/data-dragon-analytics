import { Module } from '@nestjs/common';
import { DataDragonController } from './manage-data-dragon-files/data-dragon.controller';
import { DataDragonService } from './manage-data-dragon-files/data-dragon.service';
import { DataDragonConnectionService } from '../services/data-dragon-connection.service';
import { DataDragonRepository } from './manage-data-dragon-files/repository/data-dragon.repository';

@Module({
  imports: [],
  controllers: [DataDragonController],
  providers: [
    DataDragonService,
    DataDragonConnectionService,
    { provide: DataDragonRepository, useExisting: DataDragonConnectionService },
  ],
  exports: [],
})
export class DataDragonModule {}
