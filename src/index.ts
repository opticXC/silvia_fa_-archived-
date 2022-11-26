import {CacheType, Client,CommandInteraction,Interaction,Message, REST} from "discord.js";
import {intents} from './config/intents'
import { CommandList } from "./commandlist";
import { dbConnect } from "./db/connect";
import { register } from "./register";
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
    register(client);
    console.log(`Logged in as ${client.user?.username}`);
})


client.on("interactionCreate", (interaction)=>{
    if (interaction.isCommand()){
        CommandParse(interaction);
    }
})


//dbConnect();

client.login(process.env.BOT_TOKEN);