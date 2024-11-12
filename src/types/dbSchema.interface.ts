import { DBSchema } from 'idb';
import { UserProfile } from './profile.type';

export interface MyDB extends DBSchema {
    userProfiles: {
        key: string;
        value: UserProfile;
    };
}
