import { CommandList } from "./commandlist";
import { Command } from "./interface/Command";
import {REST} from "@discordjs/rest"
import { Client, Routes } from "discord.js";


export const register = async(BOT:Client)=>{
    const rest = new REST().setToken(process.env.BOT_TOKEN as string);
    const cmd_data = CommandList.map((command)=> command.data.toJSON());

    await rest.put(
        Routes.applicationGuildCommands(
            BOT.user?.id || "missing id",
            "979628815271747615" as string
        ),
        {
            body: cmd_data
        }
        
    )
    console.log(`commands registered `);
    for (const cmd of CommandList){
        console.log(`Loaded command ${cmd.data.name}`)
    }
}