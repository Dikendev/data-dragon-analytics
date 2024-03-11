import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Challenger } from './main/use-case/manage-data-dragon-files/interfaces/challenger.interface';

@Injectable()
export class AppService {
  async getHello(): Promise<Challenger[]> {
    const result = fs.readFileSync('src/challenges.json', 'utf-8');

    return result as unknown as Challenger[];
  }
}
