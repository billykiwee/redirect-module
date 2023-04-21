import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  public Admin = admin;

  public collections(
    ref: collectionType,
  ): FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData> {
    return admin.firestore().collection(ref);
  }
}

type collectionType = 'linkss' | 'statistics';
