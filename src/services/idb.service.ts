import { IDBPDatabase, openDB } from 'idb';
import { MyDB } from '../types/dbSchema.interface';

class IdbService {

    db: IDBPDatabase<MyDB> | undefined;

    private dbPromise = openDB<MyDB>('freedomDB', 1, {
        upgrade(db) {
            db.createObjectStore('userProfiles', { keyPath: 'name' });
        }
    });

    public async init(): Promise<void> {
        this.db = await this.dbPromise;
    }
}

export const idbService = new IdbService();
