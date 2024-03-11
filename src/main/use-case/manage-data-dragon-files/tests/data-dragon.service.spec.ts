import { Test, TestingModule } from '@nestjs/testing';
import { CHALLENGER, DataDragonService } from '../data-dragon.service';
import { Challenger } from '../interfaces/challenger.interface';
import { DataDragonRepository } from '../repository/data-dragon.repository';
import { DataDragonConnectionService } from '../../../services/data-dragon-connection.service';

export const dataDragonRepositoryMock = {
  dataDragonTailConnection: jest.fn(),
};
describe('DataDragonService', () => {
  let service: DataDragonService;
  let dataDragonRepository: DataDragonRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DataDragonService,
        DataDragonConnectionService,
        { provide: DataDragonRepository, useValue: dataDragonRepositoryMock },
      ],
    }).compile();

    service = module.get<DataDragonService>(DataDragonService);
    dataDragonRepository =
      module.get<DataDragonRepository>(DataDragonRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should dataDragonRepository be defined', () => {
    expect(DataDragonConnectionService).toBeDefined();
  });

  it('should dataDragonRepository be defined', () => {
    expect(dataDragonRepository).toBeDefined();
  });

  it('should return challengers by language', async () => {
    const languageType = 'pt_BR';
    const expectedChallengers: Partial<Challenger>[] = [
      { name: 'Challenger 1', id: 2 },
      { name: 'Challenger 2', id: 3 },
    ];
    dataDragonRepositoryMock.dataDragonTailConnection.mockResolvedValue({
      value: expectedChallengers[0],
    });
    const result = await service.challengesByLanguage(languageType);

    expect(
      dataDragonRepositoryMock.dataDragonTailConnection,
    ).toHaveBeenCalledWith(languageType, CHALLENGER);
    expect(result).toEqual(expectedChallengers[0]);
  });
});
