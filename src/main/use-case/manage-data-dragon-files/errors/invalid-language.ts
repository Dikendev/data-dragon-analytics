import { DomainError } from './domain-error.interface';

export class InvalidLanguage extends Error implements DomainError {
  constructor(language: string) {
    super(`The language ${language} is invalid`);
    this.name = 'InvalidLanguageError';
  }
}
