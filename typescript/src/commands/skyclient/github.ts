import { Command } from "discord-akairo";

export default class github extends Command {
	constructor() {
		super("github", {
			aliases: ["github", "sourcecode"] 
		});
	}

	exec(message) {
		//console.log("[Command ran] github")
		return message.channel.send("https://github.com/nacrt/SkyblockClient")
	}
}