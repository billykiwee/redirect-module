import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  public Admin = admin;

  public db = admin.firestore();

  public database = (collection: string) => {
    return this.db.collection(collection);
  };

  public read = async (path: documentType): Promise<documentType | null> => {
    const snapshot = await path.get();
    return snapshot.exists ? (snapshot.data() as documentType) : null;
  };
}

export type documentType = FirebaseFirestore.DocumentData;

export type collectionType =
  admin.firestore.CollectionReference<admin.firestore.DocumentData>;
