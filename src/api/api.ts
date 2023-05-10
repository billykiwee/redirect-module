import { generateUUID } from 'src/utils/functions/uuid';

export const API = () => {
  const collection = ['users', 'links', 'statistics'];

  for (const c in collection) {
    return {
      [collection[c]]: {
        db: collection[c],
        uuid: generateUUID(collection[c]),
        api: `qlee.me-API=${collection[c]}`,
      },
    };
  }
};
