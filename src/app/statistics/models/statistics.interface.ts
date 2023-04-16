export interface StatisticsInt {
  linkID: string;
  uuid: string;
  metrics: {
    views: number;
    refs: string[];
    adresses: string[];
  };
  updatedAt: Date;
}
