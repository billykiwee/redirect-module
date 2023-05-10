import { FirebaseService } from './firebase.service';
import * as admin from 'firebase-admin';

// mock pour Firestore
jest.mock('firebase-admin', () => {
  const firestore = jest.fn(() => ({
    collection: jest.fn(),
  }));
  return {
    firestore: jest.fn(() => firestore),
  };
});

describe('FirebaseService', () => {
  let firebaseService: FirebaseService;

  beforeEach(() => {
    firebaseService = new FirebaseService();
  });

  it('should create a new instance of FirebaseService', () => {
    expect(firebaseService).toBeInstanceOf(FirebaseService);
  });

  it('should have an Admin property', () => {
    expect(firebaseService.Admin).toBeDefined();
    expect(firebaseService.Admin).toBe(admin);
  });

  it('should have a db property', () => {
    expect(firebaseService.db).toBeDefined();
  });

  it('should have a database method', () => {
    expect(firebaseService.database).toBeDefined();
    expect(typeof firebaseService.database).toBe('function');
  });

  it('should return a document or null with the read method', async () => {
    const mockDocument = {
      exists: true,
      data: jest.fn(() => ({ id: '1234' })),
    };
    const mockGet = jest.fn(() => Promise.resolve(mockDocument));
    const mockPath = { get: mockGet };
    const result = await firebaseService.read(mockPath as any);
    expect(mockGet).toHaveBeenCalled();
    expect(result).toEqual(mockDocument.data());
  });
});
