import { randomUUID } from 'crypto';

export const generateUUID = (name: string): string => {
  return `${name.toUpperCase()}-${randomUUID()}`;
};
