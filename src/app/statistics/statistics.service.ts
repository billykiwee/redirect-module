import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { FirebaseService } from 'src/app/firebase/firebase.service';
import { getIP } from 'src/utils/functions/getIP';
import { MetricsInt, StatisticsInt } from './models/statistics.interface';

@Injectable()
export class StatisticsService {
  constructor(private readonly firebaseSerice: FirebaseService) {}

  public statistics = this.firebaseSerice.database('statistics');

  public async create(id: string) {
    const stats = this.statistics.doc(id);

    const data: StatisticsInt = {
      uuid: randomUUID(),
      link: {
        id: randomUUID(),
        uuid: randomUUID(),
      },
      views: 0,
      updatedAt:
        this.firebaseSerice.Admin.firestore.FieldValue.serverTimestamp(),
    };

    stats.set(data);
  }

  public async update(id: string, ref: string, device: string) {
    const metrics: MetricsInt = {
      ref: ref,
      adresse: await getIP(),
      device: device,
    };

    const readStat = await this.firebaseSerice.read(
      this.statistics.doc(id).collection('stat'),
    );

    const stat = this.firebaseSerice
      .database('statistics')
      .doc(id)
      .collection('stat');

    this.statistics.doc(id).update({
      views: readStat?.views + 1,
    });

    stat.add({
      ...metrics,
      updatedAt:
        this.firebaseSerice.Admin.firestore.FieldValue.serverTimestamp(),
    });
  }
}
