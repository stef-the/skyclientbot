import { Command } from "discord-akairo";

export default class download extends Command {
	constructor() {
		super("download", {
			aliases: ["download"] 
		});
	}

	exec(message) {
		//console.log("[Command ran] download")
		return message.channel.send("https://github.com/nacrt/SkyblockClient/releases/latest")
	}
}