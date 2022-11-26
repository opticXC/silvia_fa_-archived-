import { CacheType, CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "../interface/Command";

export const ping: Command = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("pong"),
    run: async function (interaction: CommandInteraction<CacheType>): Promise<void> {
        interaction.channel?.send("Pong").then (async(msg)=>{

            interaction.reply(`${msg.createdTimestamp - interaction.createdTimestamp}ms` )
            msg.delete();
        })

    },
    help: "Bot Latency Test"
}