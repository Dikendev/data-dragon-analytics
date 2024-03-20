import { Injectable } from '@nestjs/common';
import { InvalidLanguage } from '../use-case/manage-data-dragon-files/errors/invalid-language';
import { Either, left, right } from '../../shared/either';
import { DataDragonRepository } from '../use-case/manage-data-dragon-files/repository/data-dragon.repository';
import { LanguagesType } from '../constants/language-type';
import { readFileAsync } from '../../utils/read-file';
import { readdirSync } from 'fs';
const CHAMPION = 'champion';

@Injectable()
export class DataDragonConnectionService implements DataDragonRepository {
  dataDragonPath = process.env.DATA_DRAGON_PATH;
  dragonPath = process.env.DATA_DRAGON;
  constructor() {}

  async dataDragonChampion<T>(
    champion: string,
    language: string,
  ): Promise<Either<InvalidLanguage, T>> {
    try {
      const championResult = await readFileAsync(
        `${this.dataDragonPath}/${language}/champion/${champion}.json`,
        'utf-8',
      );

      return right(<T>JSON.parse(championResult));
    } catch (error) {
      return left(new InvalidLanguage(language));
    }
  }

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

  async championNames(languageType: LanguagesType): Promise<string[]> {
    const path = `${this.dataDragonPath}/${languageType}/${CHAMPION}/`;
    const files = readdirSync(path);
    const jsonFiles = files.filter((file) => file.endsWith('.json'));
    return jsonFiles;
  }

  async dataDragonLanguageAvailable(): Promise<string> {
    const path = `${this.dragonPath}/languages.json`;
    const files = await readFileAsync(path, 'utf-8');
    return JSON.parse(files);
  }
}
