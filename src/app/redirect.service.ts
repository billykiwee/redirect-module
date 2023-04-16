import { Injectable } from '@nestjs/common';

@Injectable()
export class RedirectService {
  public findAll(id: string): string {
    return id;
  }

  public find(id: string): string {
    return id;
  }
}
