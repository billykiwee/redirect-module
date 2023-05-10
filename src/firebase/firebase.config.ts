import * as admin from 'firebase-admin';

export const initializeFirebase = () => {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(
          /\\n/g,
          '\n',
        ),
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      }),
      databaseURL: process.env.FIREBASE_ADMIN_DATABASE_URL,
    });
  } catch (err) {
    console.log(err);
  }
};
