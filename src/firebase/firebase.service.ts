import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  public Admin = admin;

  public collections = (
    ref: collectionType,
  ): FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData> => {
    const db = admin.firestore();

    return db.collection(ref);
  };
}

type collectionType = 'linkss' | 'statistics';
