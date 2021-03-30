import axios from "axios";
import { Command } from "discord-akairo";
import { MessageEmbed } from "discord.js";

export default class modinfo extends Command {
    constructor() {
        super("modinfo", {
            aliases: ["mod"],
            args: [
                {
                    id: 'mod',
                    type: 'string'
                }
            ]
        });
    }

    async exec(message, args) {


        const mods = await (await axios.get("https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/mods.json")).data;

        const mod = mods.find(e => e.display && e.display !== "no" && !e.hidden && args.mod === e.id);

        if (!mod) {
            const errEmbed = new MessageEmbed()
                .setTitle('Invalid ID')
                .setURL('https://github.com/nacrt/SkyblockClient-REPO/blob/main/files/mods.json')
                .setDescription(`There doesn't seem to be a mod in our repo with the ID \`${args.mod}\`.\nTry again with a new ID, or browse the repository by clicking the title of this embed.`)
                .setColor('#ff0000')
            return message.channel.send(errEmbed);
        }

        const { display: name, description, url, icon, creator, command } = mod;

        const modinfoembed = new MessageEmbed()
            .setColor('#9c25c4')
            .setTitle(name)
            .setThumbnail(`https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/icons/${encodeURIComponent(icon)}`)
            .setFooter(`Created by ${creator}`)
            .addField("Description", description)
            .addField("Main Command", `\`${command}\``);

        if (url) {
            modinfoembed.addField("Direct Download", `[Click here!](${url})`);
            let size = parseInt((await axios.head(url)).headers["content-length"], 10);
            if (size) {
                modinfoembed.addField("Size", `${(size / 1e+6)} megabytes`);
            }
        }
        return message.channel.send(modinfoembed);
    }
}