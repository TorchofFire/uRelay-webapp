import sodium from 'libsodium-wrappers';

class SignatureService {

    public generateKeyPair(): { publicKey: string; privateKey: string } {
        const keyPair = sodium.crypto_sign_keypair();
        const publicKey = sodium.to_base64(keyPair.publicKey);
        const privateKey = sodium.to_base64(keyPair.privateKey);

        return { publicKey, privateKey };
    }

    public signMessage(message: string, privateKey: string): string {
        const messageUint8 = sodium.from_string(message);
        const signedMessage = sodium.crypto_sign(messageUint8, sodium.from_base64(privateKey));

        return sodium.to_base64(signedMessage);
    }

    public verifySignature(signedMessage: string, publicKey: string): string | null {
        try {
            const message = sodium.crypto_sign_open(signedMessage, sodium.from_base64(publicKey));
            return sodium.to_string(message);
        } catch {
            return null;
        }
    }

}

export const signatureService = new SignatureService();
