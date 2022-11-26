import "node:fs"
import { Command } from "./interface/Command"; 
import { ping } from "./commands/ping";

export var CommandList: Command[] = [ping]




