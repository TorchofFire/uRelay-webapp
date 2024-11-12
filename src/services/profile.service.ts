/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { signatureService } from './signature.service';
import { UserProfile } from '../types/profile.type';
import { idbService } from './idb.service';

class ProfileService {

    userProfile: UserProfile;

    public async createNewProfile(name: string): Promise<void> {
        const { privateKey, publicKey } = signatureService.generateKeyPair();

        this.userProfile = {
            name,
            signature: {
                privateKey,
                publicKey
            },
            servers: []
        };

        await this.saveUserProfile(this.userProfile);
    }

    private async saveUserProfile(profile: UserProfile): Promise<void> {
        await idbService.db!.put('userProfiles', profile);
    }

    public async getUserProfile(name: string): Promise<UserProfile | undefined> {
        return await idbService.db!.get('userProfiles', name);
    }

    public async getAllUserProfiles(): Promise<UserProfile[]> {
        return await idbService.db!.getAll('userProfiles');
    }

}

export const profileService = new ProfileService();
