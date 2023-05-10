import { Module } from '@nestjs/common';
import { RedirectController } from './redirect.controller';
import { initializeFirebase } from '../firebase/firebase.config';

@Module({
  controllers: [RedirectController],
})
export class RedirectModule {
  constructor() {
    initializeFirebase();
  }
}
