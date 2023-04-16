export interface StatisticsInt {
  uuid: string;
  link: {
    id: string;
    uuid: string;
  };
  metrics: {
    views: number;
    refs: string[];
    adresses: string[];
  };
  updatedAt: Date;
}
