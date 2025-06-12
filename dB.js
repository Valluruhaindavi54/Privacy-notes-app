import { openDB } from 'idb';

const DB_NAME = 'secure-notes-db';
const STORE_NAME = 'notes';

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
                }
                  },
                  });

                  export async function addNote(content) {
                    const db = await dbPromise;
                      await db.add(STORE_NAME, { content, created: new Date() });
                      }

                      export async function getAllNotes() {
                        const db = await dbPromise;
                          return await db.getAll(STORE_NAME);
                          }