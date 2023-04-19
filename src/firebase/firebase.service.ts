import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

@Injectable()
export class FirebaseService {
  public serviceAccount: ServiceAccount;

  public Admin = admin;

  constructor() {
    this.serviceAccount = {
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    };
    // Call initializeFirebase() in the constructor
    this.initializeFirebase();
  }

  public async initializeFirebase() {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(this.serviceAccount),
        databaseURL:
          'https://likeme-2b112-default-rtdb.europe-west1.firebasedatabase.app',
      });
    }
  }

  public collections(
    ref: collectionType,
  ): FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData> {
    const db = admin.firestore();
    return db.collection(ref);
  }
}

type collectionType = 'links' | 'statistics';
