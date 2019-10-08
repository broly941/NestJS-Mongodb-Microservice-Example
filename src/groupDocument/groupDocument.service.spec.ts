import { Test, TestingModule } from '@nestjs/testing';
import { GroupDocumentService } from './groupDocument.service';

describe('GroupDocumentService', () => {
  let service: GroupDocumentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupDocumentService],
    }).compile();

    service = module.get<GroupDocumentService>(GroupDocumentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
