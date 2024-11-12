import { Guild } from '../types/guild.interface';

class GuildService {
    guilds: Guild[] = [];
    guildMap = new Map<string, Guild>();

    public addGuild(guildId: string): void {
        if (this.guildMap.has(guildId)) return;
        const guild: Guild = { guildId };
        this.guilds.push(guild);
        this.guildMap.set(guildId, guild);
    }

    public removeGuild(guildId: string): void {
        const removedGuild = this.guildMap.get(guildId);
        if (!removedGuild) return;
        this.guilds = this.guilds.filter(guild => guild !== removedGuild);
        this.guildMap.delete(guildId);
    }

    public populateFrontEndWithGuild(guildId: string): void {
        const guild = this.guildMap.get(guildId);
        if (!guild) return;
        console.log(guild);
        // TODO: actually finish this
    }

}

export const guildService = new GuildService();
