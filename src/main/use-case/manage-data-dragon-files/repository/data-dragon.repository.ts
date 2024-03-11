import { Either } from '../../../../shared/either';
import { LanguagesType } from '../../../constants/language-type';
import { InvalidLanguage } from '../errors/invalid-language';

export abstract class DataDragonRepository {
  abstract dataDragonTailConnection: <T>(
    language: LanguagesType,
    route: string,
  ) => Promise<Either<InvalidLanguage, T>>;
}
