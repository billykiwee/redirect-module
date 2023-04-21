import { NestFactory } from '@nestjs/core';
import { RedirectModule } from './app/redirect.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(RedirectModule);
  await app.listen(3000);
}
bootstrap();
