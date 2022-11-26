import {CacheType, Client,CommandInteraction,Interaction,Message} from "discord.js";
import {intents} from './config/intents'
import { CommandList } from "./commandlist";
import { dbConnect } from "./db/connect";
require('dotenv').config();
const client = new Client({intents:intents});


const CommandParse =async (interaction:CommandInteraction<CacheType>) => {

        for(const cmd of CommandList){
            if (interaction.commandName=== cmd.data.name){
                await cmd.run(interaction);
                break;
            }
        }
}


client.once('ready', ()=>{

    console.log(`Logged in as ${client.user?.username}`);
})


client.on("interactionCreate", (interaction)=>{
    if (interaction.isCommand()){
        CommandParse(interaction);
    }
})


//dbConnect();
client.login(process.env.BOT_TOKEN);