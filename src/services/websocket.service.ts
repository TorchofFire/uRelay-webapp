import moment from 'moment';
import sodium from 'libsodium-wrappers';
import { WSPackets } from '../types/packet.namespace';
import { guildService } from './guild.service';
import { idbService } from './idb.service';
import { messageService } from './message.service';
import { profileService } from './profile.service';
import { signatureService } from './signature.service';

export async function websocketInitialize(): Promise<void> {
    await sodium.ready;
    await idbService.init();

    profileService.userProfile = (await profileService.getAllUserProfiles())[0];
    if (!profileService.userProfile) {
        const name = window.prompt('Enter your username') ?? 'undefined';
        await profileService.createNewProfile(name);
    }
    const secure = false;
    // TODO: Get rid of all this nonsense^ when you make a real profile selector

    const serverAddress = 'localhost:8080';
    const fullAddress = `ws${secure ? 's' : ''}://${serverAddress}`;

    const ws = new WebSocket(fullAddress);
    guildService.addGuild(serverAddress);

    ws.onopen = (): void => {
        if (!profileService.userProfile) return;
        const proof = signatureService.signMessage(`${moment().unix().toString()}|${serverAddress}`, profileService.userProfile.signature.privateKey);
        const handshake: WSPackets.ServerHandshake = {
            packet_type: 'server_handshake',
            name: profileService.userProfile.name,
            proof: proof,
            public_key: profileService.userProfile.signature.publicKey
        };
        ws.send(JSON.stringify(handshake));
    };
    ws.onmessage = (data): void => {
        void messageService.handle(data.data, serverAddress);
    };
    ws.onclose = (event): void => {
        console.warn(`Disconnected. Status Code: ${event.code} | Reason: ${event.reason}`);
    };
}