
export interface Guild {
    guildId: string;
    userId?: number;
    profiles?: {
        name: string;
        id: number;
        publicKey: string;
    }[];
    channels?: {
        name: string;
        id: number;
    }[];
};
