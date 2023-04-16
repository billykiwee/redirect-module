import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public findAll(id: string): string {
    return id;
  }

  public find(id: string): string {
    return id;
  }
}
