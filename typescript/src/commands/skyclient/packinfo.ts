import { Command } from "discord-akairo";
import { MessageEmbed } from "discord.js";

const curl = require("curlrequest");


export default class packinfo extends Command {
    constructor() {
        super("packinfo", {
            aliases: ["pack"],
            args: [
                {
                    id: 'pack',
                    type: 'string'
                }
            ]
        });
    }

    exec(message, args) {

        curl.request(
            { url: "https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/packs.json" },
            (e, data) => {

                data = JSON.parse(data);
                let found
                const packinfoembed = new MessageEmbed()
                .setColor('#9c25c4')

                data.forEach(element => {

                    if (element.display && element.display != "no" && element.hidden != true) {
                        let pack = ""


                        if (args.pack == element.id) {



                            let packname

                            if (element.display) {
                                packname = element.display
                            }
                            if (element.description) {
                                packinfoembed.addFields({ name: `Description`, value: element.description })
                            }
                            if (element.url) {
                                packinfoembed.addFields({ name: `Direct Download`, value: `[Click here!](${element.url})` })
                            }
                            if (element.icon) {
                                packinfoembed.setThumbnail(`https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/icons/${encodeURIComponent(element.icon)}`)
                            }
                            if (element.creator) {
                                packinfoembed.setFooter(`Created by ${element.creator}`)
                            }
                            if (element.command) {
                                packinfoembed.addFields({ name: `Main Command`, value: `\`${element.command}\`` })
                            }

                            packinfoembed.setTitle(packname)



                            found = true
                        }


                    }

                });
                if (found != true) {
                    const errEmbed = new MessageEmbed()
                        .setTitle('Invalid ID')
                        .setURL('https://github.com/nacrt/SkyblockClient-REPO/blob/main/files/packs.json')
                        .setDescription(`There doesn't seem to be a pack in our repo with the ID \`${args.pack}\`.\nTry again with a new ID, or browse the repository by clicking the title of this embed.`)
                        .setColor('#ff0000')
                    message.channel.send(errEmbed)
                }
                else if (found = true) {
                    message.channel.send(packinfoembed)
                }
            }
        )
    }
}
