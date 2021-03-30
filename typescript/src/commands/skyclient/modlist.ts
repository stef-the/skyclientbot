import { Command } from "discord-akairo";
import { MessageEmbed } from "discord.js";

const curl = require("curlrequest");


export default class modlist extends Command {
	constructor() {
		super("modlist", {
			aliases: ["skyclientmodlist", "scmodlist", "scmods", "mods", "modlist"] 
		});
	}

	exec(message) {

        curl.request(
            {url: "https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/mods.json"}, 
            (e, data) => {

                data = JSON.parse(data);

                const modsEmbed = new MessageEmbed()
                .setColor('#9c25c4')
                .setTitle('SkyClient Mods List')

                data.forEach(element => {
                    if(element.display && element.display != "no" && element.hidden != true) {
                        let mods = ""

                        if(element.display.includes("Bundle")) {
                            element.actions.forEach(e => {
                                
                                if(e.text && e.text != "Guide") {

                                    mods = mods+e.text+", "
                                }
                            });
                            mods = mods.substring(0, mods.length-2)
                        }
                        else {
                            if(element.display && element.creator && element.display != "no" && element.discordcode) {
                                mods = `Creator: [${element.creator}](https://discord.gg/${element.discordcode})\nMod ID: \`${element.id}\``
                            }
                            else{
                                mods = `Creator: ${element.creator}\nMod ID: \`${element.id}\``
                            }
                        }
                        
                        modsEmbed.addField(`${element.display}`, mods, true)
                        
                    } 
                });
                message.channel.send(modsEmbed);
            }
        ) 
	}
}
