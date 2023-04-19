import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { FirebaseService } from 'src/firebase/firebase.service';
import { StatisticsInt } from './models/statistics.interface';

@Injectable()
export class StatisticsService {
  constructor(private readonly firebaseSerice: FirebaseService) {}

  public async create(id: string) {
    const getStat = await this.firebaseSerice.collections('statistics');

    const stats = getStat.doc(id);

    const data: StatisticsInt = {
      uuid: randomUUID(),
      link: {
        id: randomUUID(),
        uuid: randomUUID(),
      },
      metrics: {
        views: 0,
        refs: [],
        adresses: [],
        devices: {
          mobile: 0,
          desktop: 0,
        },
      },
      updatedAt:
        this.firebaseSerice.Admin.firestore.FieldValue.serverTimestamp(),
    };

    stats.set(data);
  }

  public async update(id: string, ref: string) {
    const getStat = await this.firebaseSerice.collections('statistics');

    const stats = getStat.doc(id);

    const getStats = async () => {
      const snapshot = await stats.get();

      if (snapshot.exists) {
        return snapshot.data();
      } else {
        return null;
      }
    };

    const statistics = await getStats();

    console.log(ref);

    const IP = await getIP();

    const data = {
      metrics: {
        views: statistics.metrics.views + 1,
        refs: [...statistics.metrics.refs, ref],
        adresses: [...statistics.metrics.adresses, IP],
        devices: {
          mobile: statistics.metrics.devices.mobile + 1,
          desktop: statistics.metrics.devices.desktop + 1,
        },
      },
      updatedAt:
        this.firebaseSerice.Admin.firestore.FieldValue.serverTimestamp(),
    };

    stats.update(data);
  }
}

async function getIP() {
  return fetch('https://api.ipify.org?format=json')
    .then((response) => response.json())
    .then((data) => data.ip)
    .then(async (ip) => {
      return ip;
    });
}
