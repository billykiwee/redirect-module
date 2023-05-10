import { NestFactory } from '@nestjs/core';
import { RedirectModule } from './app/redirect.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const port = 3000;

  dotenv.config();
  const app = await NestFactory.create(RedirectModule);
  await app.listen(port);
}
bootstrap();
