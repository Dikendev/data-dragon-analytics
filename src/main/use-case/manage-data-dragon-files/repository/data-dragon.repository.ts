import { Either } from '../../../../shared/either';
import { LanguagesType } from '../../../constants/language-type';
import { InvalidLanguage } from '../errors/invalid-language';

export abstract class DataDragonRepository {
  abstract dataDragonTailConnection: <T>(
    language: LanguagesType,
    route: string,
  ) => Promise<Either<InvalidLanguage, T>>;

  abstract dataDragonChampion: <T>(
    champion: string,
    language: string,
  ) => Promise<Either<InvalidLanguage, T>>;

  abstract championNames: (languageType: LanguagesType) => Promise<string[]>;

  abstract dataDragonLanguageAvailable: () => Promise<string>;
}
