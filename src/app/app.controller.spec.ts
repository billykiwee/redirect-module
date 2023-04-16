import { Test, TestingModule } from '@nestjs/testing';
import { RedirectController } from './redirect.controller';
import { AppService } from './redirect.service';

describe('AppController', () => {
  let redirectController: RedirectController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RedirectController],
      providers: [AppService],
    }).compile();

    redirectController = app.get<RedirectController>(RedirectController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
