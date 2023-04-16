import { NestFactory } from '@nestjs/core';
import { RedirectModule } from './app/redirect.module';

async function bootstrap() {
  const app = await NestFactory.create(RedirectModule);
  await app.listen(3000);
}
bootstrap();
