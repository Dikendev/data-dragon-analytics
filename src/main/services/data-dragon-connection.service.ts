import { Injectable } from '@nestjs/common';
import { InvalidLanguage } from '../use-case/manage-data-dragon-files/errors/invalid-language';
import { Either, left, right } from '../../shared/either';
import { DataDragonRepository } from '../use-case/manage-data-dragon-files/repository/data-dragon.repository';
import { LanguagesType } from '../constants/language-type';
import { readFileAsync } from '../../utils/read-file';

@Injectable()
export class DataDragonConnectionService implements DataDragonRepository {
  dataDragonPath = process.env.DATA_DRAGON_PATH;
  constructor() {}

  async dataDragonTailConnection<T>(
    languageType: LanguagesType,
    route: string,
  ): Promise<Either<InvalidLanguage, T>> {
    try {
      const result = await readFileAsync(
        `${this.dataDragonPath}/${languageType}/${route}`,
        'utf-8',
      );
      return right(<T>JSON.parse(result));
    } catch (error) {
      return left(new InvalidLanguage(languageType));
    }
  }
}
