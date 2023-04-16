import { Injectable } from '@nestjs/common';
import { linksMock } from './mock/link.mock';
import { LinksInt } from './models/links.interface';

@Injectable()
export class LinksService {
  links: LinksInt[] = linksMock;

  public find(id: string) {
    return this.links.find((link) => link.id === id);
  }

  public findAll() {
    return this.links;
  }

  public createLink(link: LinksInt) {
    return (this.links = [...this.links, link]);
  }

  public deleteLink(id: string) {
    return (this.links = this.links.filter((link) => link.id !== id));
  }
}
