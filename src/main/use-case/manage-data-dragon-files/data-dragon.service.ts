import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InvalidLanguage } from './errors/invalid-language';
import { Challenger } from 'src/main/use-case/manage-data-dragon-files/interfaces/challenger.interface';
import { LanguagesType } from '../../constants/language-type';
import { DataDragonRepository } from './repository/data-dragon.repository';
export const CHALLENGER = 'challenges.json';

@Injectable()
export class DataDragonService {
  constructor(private dataDragonRepository: DataDragonRepository) {}

  async challengesByLanguage(
    languageType: LanguagesType,
  ): Promise<InvalidLanguage | Challenger[]> {
    const dataDragonChallengerOrError =
      await this.dataDragonRepository.dataDragonTailConnection<Challenger[]>(
        languageType,
        CHALLENGER,
      );

    if (dataDragonChallengerOrError.isLeft()) {
      throw new InvalidLanguage(languageType);
    }

    return dataDragonChallengerOrError.value;
  }

  async championByLanguage(
    champion: string,
    language: LanguagesType,
  ): Promise<any> {
    const dataDragonChallengerOrError =
      await this.dataDragonRepository.dataDragonChampion<any>(
        champion,
        language,
      );

    if (dataDragonChallengerOrError.isLeft()) {
      throw new HttpException('Champion not found', HttpStatus.NOT_FOUND);
    }

    const championResult = dataDragonChallengerOrError.value;
    return championResult;
  }

  async championNames(language: LanguagesType): Promise<string[]> {
    const championNames =
      await this.dataDragonRepository.championNames(language);
    return championNames;
  }

  async languagesAvailable(): Promise<string> {
    const languagesAvailable =
      await this.dataDragonRepository.dataDragonLanguageAvailable();
    return languagesAvailable;
  }
}
