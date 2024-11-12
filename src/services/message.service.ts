import { WSPackets } from '../types/packet.namespace';
import { guildService } from './guild.service';
import sodium from 'libsodium-wrappers';

class MessageService {

    public handle(data: MessageEvent['data'], guildId: string): void {
        const packet = JSON.parse(data.toString());

        if (WSPackets.isPacket(packet, 'guild_message')) this.handleGuildMessage(packet, guildId);

        if (WSPackets.isPacket(packet, 'profile')) this.handleProfileUpdate(packet, guildId);

        if (WSPackets.isPacket(packet, 'system_message')) this.handleSystemMessage(packet, guildId);
    }

    private handleGuildMessage(packet: WSPackets.GuildMessage, guildId: string): void {
        const guild = guildService.guildMap.get(guildId);
        if (!guild?.profiles) return;
        const sender = guild.profiles.find(profile => profile.id === packet.senderId);
        const PKstring = sender?.publicKey;
        if (!PKstring) return;
        const publicKey: Uint8Array = sodium.from_base64(PKstring);
        const message: Uint8Array = sodium.from_base64(packet.message);
        console.log(packet.senderId, `${sender.name}:`, sodium.to_string(sodium.crypto_sign_open(message, publicKey)));
    }

    private handleProfileUpdate(packet: WSPackets.Profile, guildId: string): void {
        const guild = guildService.guildMap.get(guildId);
        if (!guild?.profiles) return;
        const profile = guild.profiles.find(p => p.id === packet.id);
        if (profile) {
            profile.name = packet.name;
            profile.publicKey = packet.public_key;
        } else {
            guild.profiles.push({
                id: packet.id,
                name: packet.name,
                publicKey: packet.public_key
            });
        }
        guildService.guildMap.set(guildId, guild);
    }

    private handleSystemMessage(packet: WSPackets.SystemMessage, guildId: string): void {
        console.warn(`${guildId}:
    Severity: ${packet.severity}
    Channel: ${packet.channel_id}
    ${packet.message}
        `);
    }
}

export const messageService = new MessageService();
