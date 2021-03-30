import { Command } from "discord-akairo";

export default class packfix extends Command {
	constructor() {
		super("packfix", {
			aliases: ["packfix"] 
		});
	}

	exec(message) {
		//console.log("[Command ran] packfix")
		return message.channel.send(`**If custom items don't appear:**
- Settings > Video Settings > Quality > Custom Items: ON

**If Custom Items don't work in hand:**
- Use sk1ers old animations instead of 1.7 Animations or any other Old Animations mod
- To get sk1ers old animations, apply for Beta Tester here: <https://sk1er.club/beta>

**If you crash in the Dwarven Mines or randomly in Dungeons**
- This is usually caused by connected textures. Set them to __Fast__ in the Video Settings
- If you still experience Crashes, upload the latest crashlog located in \`%appdata%\.minecraft\skyclient\crash-reports\``)
	}
}