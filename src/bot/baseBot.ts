import { Client } from 'discord.js';
import type { ClientOptions } from 'discord.js';

import type { Optional } from './util/type';

export interface BotConstructorOptions extends ClientOptions {
    commandPrefix: string,
}

export class Command {

}

class BaseBot extends Client {
    public ownerId: Optional<number>;
    public ownerIds: Optional<number[]>;
    
    constructor(options: BotConstructorOptions) {
        super(options);
    }

    public addCommand(command: Command) {

    }

    public removeCommand(command: Command) {

    } 
}