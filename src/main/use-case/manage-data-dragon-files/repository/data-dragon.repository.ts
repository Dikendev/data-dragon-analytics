import { LanguagesType } from '../data-dragon-manager';
import { InvalidLanguage } from '../errors/invalid-language';
import { Challenger } from 'src/challenger.interface';

export abstract class DataDragonRepository {
  abstract getChallengesByLanguage: (
    language: LanguagesType,
  ) => Promise<InvalidLanguage | Challenger[]>;
}
