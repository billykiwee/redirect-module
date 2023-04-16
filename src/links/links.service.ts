import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { LinksInt } from './models/links.interface';

@Injectable()
export class LinksService {
  links: LinksInt[] = [
    {
      id: 'cool',
      uuid: randomUUID(),
      url: 'https://www.youtube.fr',
      shortLink: 'qlee.me/cool',
      user: {
        uuid: randomUUID(),
      },
      statistics: {
        uuid: randomUUID(),
      },
      createdAt: new Date(),
    },
    {
      id: 'aaa',
      uuid: randomUUID(),
      url: 'https://www.facebook.com',
      shortLink: 'qlee.me/aaa',
      user: {
        uuid: randomUUID(),
      },
      statistics: {
        uuid: randomUUID(),
      },
      createdAt: new Date(),
    },
    {
      id: 'abc',
      uuid: randomUUID(),
      url: 'https://www.abc.com',
      shortLink: 'qlee.me/aaa',
      user: {
        uuid: randomUUID(),
      },
      statistics: {
        uuid: randomUUID(),
      },
      createdAt: new Date(),
    },
  ];

  public find(id: string) {
    return this.links.find((link) => link.id === id);
  }
}
