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
    devices: {
      mobile: number;
      desktop: number;
    };
  };
  updatedAt: any;
}
