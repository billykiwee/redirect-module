import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { GetDevice } from 'src/utils/functions/getDevice';
import { getIP } from 'src/utils/functions/getIP';
import { FirebaseService } from '../firebase/firebase.service';
import { MetricsInt, StatisticsInt } from './models/statistics.interface';

@Injectable()
export class StatisticsService {
  constructor(private readonly firebaseSerice: FirebaseService) {}

  public statistics = this.firebaseSerice.database('statistics');

  public async find(id: string) {
    const stats = this.firebaseSerice.db
      .collection('statistics')
      .doc(id)
      .collection('stat');

    return this.firebaseSerice.readCollection(stats);
  }

  public async create(id: string) {
    const stats = this.statistics.doc(id);

    const data: StatisticsInt = {
      uuid: randomUUID(),
      link: {
        id,
        uuid: randomUUID(),
      },
      views: 0,
      updatedAt:
        this.firebaseSerice.Admin.firestore.FieldValue.serverTimestamp(),
    };

    stats.set(data);
  }

  public async update(id: string, req: Request) {
    const ref = req.headers['referer'] || req.headers['referrer'];
    const metrics: MetricsInt = {
      ref: ref?.toString() ?? '',
      adresse: await getIP(),
      device: GetDevice(req.headers['user-agent'] || ''),
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
