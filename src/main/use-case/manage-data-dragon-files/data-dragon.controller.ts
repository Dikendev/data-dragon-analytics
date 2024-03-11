import { Controller, Get, Query } from '@nestjs/common';
import { DataDragonService } from './data-dragon.service';
import { Challenger } from 'src/main/use-case/manage-data-dragon-files/interfaces/challenger.interface';
import { InvalidLanguage } from './errors/invalid-language';
import { LanguagesType } from '../../constants/language-type';

@Controller('data-dragon')
export class DataDragonController {
  constructor(private readonly dataDragonService: DataDragonService) {}

  @Get()
  async getChallengesByLanguage(
    @Query('language') language: LanguagesType,
  ): Promise<Challenger[] | InvalidLanguage> {
    return await this.dataDragonService.challengesByLanguage(language);
  }
}
