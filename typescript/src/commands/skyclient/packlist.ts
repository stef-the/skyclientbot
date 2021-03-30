import { Command } from "discord-akairo";
import { MessageEmbed } from "discord.js";

const curl = require("curlrequest");


export default class packlist extends Command {
	constructor() {
		super("packlist", {
			aliases: ["skyclientpacklist", "scpacklist", "scpacks", "packs", "packlist"] 
		});
	}

	exec(message) {

        curl.request(
            {url: "https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/packs.json"}, 
            (e, data) => {

                data = JSON.parse(data);

                const modsEmbed = new MessageEmbed()
                .setColor('#9c25c4')
                .setTitle('SkyClient Resource Pack List')

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
                                mods = `Creator: [${element.creator}](https://discord.gg/${element.discordcode})\nPack ID: \`${element.id}\``
                            }
                            else if (element.creator == `_HeroBear_`){
                                mods = `Creator: \\${element.creator}\nPack ID: \`${element.id}\``
                            }
                            else{
                                mods = `Creator: ${element.creator}\nPack ID: \`${element.id}\``
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
