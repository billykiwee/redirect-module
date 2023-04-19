/* import { randomUUID } from 'crypto';
import { StatisticsInt } from './models/statistics.interface';

export async function getStatistics(link: any): Promise<StatisticsInt> {
  const ip = await getIP();

  const stats: StatisticsInt = {
    uuid: randomUUID(),
    link: {
      id: link.id,
      uuid: randomUUID(),
    },
    metrics: {
      views: 1,
      refs: ['refferer'],
      adresses: [ip],
      devices: {
        mobile: 22,
        desktop: 23,
      },
    },
    updatedAt: new Date(),
  };

  return stats;
}

async function getIP() {
  return fetch('https://api.ipify.org?format=json')
    .then((response) => response.json())
    .then((data) => data.ip)
    .then(async (ip) => {
      return ip;
    });
}

async function getAdress(ip: string) {
  return fetch(`https://ipapi.co/${ip}/json/`)
    .then((response) => response.json())
    .then((adress) => {
      return {
        country: adress.country_name,
        city: adress.city,
        country_code: adress.country_code,
      };
    });
}
 */
