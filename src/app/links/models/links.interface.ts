export type ShortLinkType = `qlee.me/${string}`;

export type URLType = `https://${string | ''}.${string}.${string}`;

export interface LinksInt {
  id: string;
  uuid: string;
  url: URLType;
  shortLink: ShortLinkType;
  user: {
    uuid: string;
  };
  statistics: {
    uuid: string;
  };
  createdAt: Date;
}
