import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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

  @Post('champion')
  async getChampionByLanguage(@Body() data: any) {
    console.log('oi', data);
    return await this.dataDragonService.championByLanguage(
      data.champion,
      data.language,
    );
  }

  @Get('champion-names')
  async getChampionsNames(@Query('language') language: LanguagesType) {
    return await this.dataDragonService.championNames(language);
  }

  @Get('languages-available')
  async getLanguagesAvailable() {
    return await this.dataDragonService.languagesAvailable();
  }
}
