import { Test, TestingModule } from '@nestjs/testing';
import { GroupDocumentController } from './groupDocumentController';

describe('DocumentSchema Controller', () => {
  let controller: GroupDocumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupDocumentController],
    }).compile();

    controller = module.get<GroupDocumentController>(GroupDocumentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
