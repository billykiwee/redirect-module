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

  public readCollection = async (
    path: documentType,
  ): Promise<Array<{ id: string; data: any }> | null> => {
    try {
      const querySnapshot = await path.get();

      const documents: Array<{ id: string; data: any }> = [];

      querySnapshot.forEach((doc) => {
        const documentData = {
          id: doc.id,
          data: doc.data(),
        };
        documents.push(documentData);
      });

      return documents;
    } catch (error) {
      console.log('Erreur lors de la lecture de la collection :', error);
      return null;
    }
  };
}

export type documentType = FirebaseFirestore.DocumentData;

export type collectionType =
  admin.firestore.CollectionReference<admin.firestore.DocumentData>;
