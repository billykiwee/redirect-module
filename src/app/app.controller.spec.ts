import { Test, TestingModule } from '@nestjs/testing';
import { RedirectController } from './redirect.controller';
import { RedirectService } from './redirect.service';

describe('AppController', () => {
  let redirectController: RedirectController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RedirectController],
      providers: [RedirectService],
    }).compile();

    redirectController = app.get<RedirectController>(RedirectController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      ///expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
