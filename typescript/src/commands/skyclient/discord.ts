import { Command } from "discord-akairo";

const curl = require("curlrequest");

export default class discord extends Command {
    constructor() {
        super("discord", {
            aliases: ["discord"],
            args: [
                {
                    id: 'server',
                    type: 'string'
                },
            ],
        });
    }

    exec(message, args) {

        curl.request(
            { url: "https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/discords.json" },
            (e, data) => {

                data = JSON.parse(data);

                let found = false
                data.forEach(element => {
                    if (element.id == args.server || element.nicknames.includes(args.server)) {
                        message.channel.send(`discord.gg/${element.code}`);
                        found = true
                    }
                });
                if (!found) {
                    message.channel.send("I don't seem to have a discord server for that!")
                }
            });
    };
}
