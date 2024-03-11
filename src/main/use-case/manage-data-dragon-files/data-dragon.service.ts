import { Injectable } from '@nestjs/common';
import { InvalidLanguage } from './errors/invalid-language';
import { Challenger } from 'src/main/use-case/manage-data-dragon-files/interfaces/challenger.interface';
import { LanguagesType } from '../../constants/language-type';
import { DataDragonRepository } from './repository/data-dragon.repository';
export const CHALLENGER = 'challenges.json';
const CHAMPION = '/champion/';

@Injectable()
export class DataDragonService {
  constructor(private dataDragonRepository: DataDragonRepository) {}

  //improve this code
  async challengesByLanguage(
    languageType: LanguagesType,
  ): Promise<InvalidLanguage | Challenger[]> {
    const dataDragonChallengerOrError =
      await this.dataDragonRepository.dataDragonTailConnection<Challenger[]>(
        languageType,
        CHALLENGER,
      );

    console.log('dataDragonChallengerOrError', dataDragonChallengerOrError);

    if (dataDragonChallengerOrError.isLeft) {
      throw new InvalidLanguage(languageType);
    } else {
      console.log('???', dataDragonChallengerOrError.value);
      return dataDragonChallengerOrError.value;
    }
  }

  async championByLanguage(language: LanguagesType, route: string) {
    const dataDragonChallengerOrError =
      await this.dataDragonRepository.dataDragonTailConnection<Challenger[]>(
        language,
        route,
      );
  }
}
