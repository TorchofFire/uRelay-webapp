
export type UserProfile = {
    name: string;
    signature: {
        privateKey: string;
        publicKey: string;
    };
    servers: string[];
} | undefined;
