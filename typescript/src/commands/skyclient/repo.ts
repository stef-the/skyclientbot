import { Command } from "discord-akairo";

export default class github extends Command {
	constructor() {
		super("repo", {
			aliases: ["repo", "repository", "skyclientrepo"] 
		});
	}

	exec(message) {
		//console.log("[Command ran] repo")
		return message.channel.send("https://github.com/nacrt/SkyblockClient-REPO/")
	}
}