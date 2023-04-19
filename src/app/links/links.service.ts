import { Injectable } from '@nestjs/common';
import { FirebaseService } from 'src/firebase/firebase.service';
import { StatisticsService } from '../statistics/statistics.service';
import { linksMock } from './mock/link.mock';
import { LinksInt } from './models/links.interface';

@Injectable()
export class LinksService {
  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly statisticsService: StatisticsService,
  ) {}

  links: LinksInt[] = linksMock;

  public async find(id: string): Promise<FirebaseFirestore.DocumentData> {
    const snapshot = await this.firebaseService
      .collections('links')
      .doc(id)
      .get();

    if (snapshot.exists) {
      return snapshot.data();
    } else {
      return null;
    }
  }

  public async createLink(link: LinksInt) {
    await this.firebaseService.collections('links').doc(link.id).set(link);

    this.statisticsService.create(link.id);
  }

  public deleteLink(id: string) {
    return (this.links = this.links.filter((link) => link.id !== id));
  }
}
