import { LinksInt } from 'src/links/models/links.interface';

export interface TransactionsInt {
  uuuid: string;
  amount: number;
  createdAt: Date;
}

export interface UserInt {
  uuid: string;
  email: string;
  name: string;
  photoURL: string;
  links?: LinksInt[];
  transactions: TransactionsInt[];
  plan: 'FREE' | 'PRO' | 'ENTREPRISE';
  createdAt: Date;
}
