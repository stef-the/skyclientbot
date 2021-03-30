"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class modinfo extends discord_akairo_1.Command {
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
        const mods = await (await axios_1.default.get("https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/mods.json")).data;
        const mod = mods.find(e => e.display && e.display !== "no" && !e.hidden && args.mod === e.id);
        if (!mod) {
            const errEmbed = new discord_js_1.MessageEmbed()
                .setTitle('Invalid ID')
                .setURL('https://github.com/nacrt/SkyblockClient-REPO/blob/main/files/mods.json')
                .setDescription(`There doesn't seem to be a mod in our repo with the ID \`${args.mod}\`.\nTry again with a new ID, or browse the repository by clicking the title of this embed.`)
                .setColor('#ff0000');
            return message.channel.send(errEmbed);
        }
        const { display: name, description, url, icon, creator, command } = mod;
        const modinfoembed = new discord_js_1.MessageEmbed()
            .setColor('#9c25c4')
            .setTitle(name)
            .setThumbnail(`https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/icons/${encodeURIComponent(icon)}`)
            .setFooter(`Created by ${creator}`)
            .addField("Description", description)
            .addField("Main Command", `\`${command}\``);
        if (url) {
            modinfoembed.addField("Direct Download", `[Click here!](${url})`);
            let size = parseInt((await axios_1.default.head(url)).headers["content-length"], 10);
            if (size) {
                modinfoembed.addField("Size", `${(size / 1e+6)} megabytes`);
            }
        }
        return message.channel.send(modinfoembed);
    }
}
exports.default = modinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9za3ljbGllbnQvbW9kaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQixtREFBeUM7QUFDekMsMkNBQTBDO0FBRTFDLE1BQXFCLE9BQVEsU0FBUSx3QkFBTztJQUN4QztRQUNJLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDaEIsSUFBSSxFQUFFO2dCQUNGO29CQUNJLEVBQUUsRUFBRSxLQUFLO29CQUNULElBQUksRUFBRSxRQUFRO2lCQUNqQjthQUNKO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUk7UUFHcEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBQyxrRkFBa0YsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRTlILE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU5RixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ04sTUFBTSxRQUFRLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2lCQUM5QixRQUFRLENBQUMsWUFBWSxDQUFDO2lCQUN0QixNQUFNLENBQUMsd0VBQXdFLENBQUM7aUJBQ2hGLGNBQWMsQ0FBQyw0REFBNEQsSUFBSSxDQUFDLEdBQUcsNkZBQTZGLENBQUM7aUJBQ2pMLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN4QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUV4RSxNQUFNLFlBQVksR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDbEMsUUFBUSxDQUFDLFNBQVMsQ0FBQzthQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ2QsWUFBWSxDQUFDLGdGQUFnRixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ3hILFNBQVMsQ0FBQyxjQUFjLE9BQU8sRUFBRSxDQUFDO2FBQ2xDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO2FBQ3BDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBRWhELElBQUksR0FBRyxFQUFFO1lBQ0wsWUFBWSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNsRSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxNQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzRSxJQUFJLElBQUksRUFBRTtnQkFDTixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvRDtTQUNKO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0o7QUFoREQsMEJBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xuaW1wb3J0IHsgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbW9kaW5mbyBleHRlbmRzIENvbW1hbmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcIm1vZGluZm9cIiwge1xuICAgICAgICAgICAgYWxpYXNlczogW1wibW9kXCJdLFxuICAgICAgICAgICAgYXJnczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdtb2QnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZXhlYyhtZXNzYWdlLCBhcmdzKSB7XG5cblxuICAgICAgICBjb25zdCBtb2RzID0gYXdhaXQgKGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9uYWNydC9Ta3libG9ja0NsaWVudC1SRVBPL21haW4vZmlsZXMvbW9kcy5qc29uXCIpKS5kYXRhO1xuXG4gICAgICAgIGNvbnN0IG1vZCA9IG1vZHMuZmluZChlID0+IGUuZGlzcGxheSAmJiBlLmRpc3BsYXkgIT09IFwibm9cIiAmJiAhZS5oaWRkZW4gJiYgYXJncy5tb2QgPT09IGUuaWQpO1xuXG4gICAgICAgIGlmICghbW9kKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJFbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxuICAgICAgICAgICAgICAgIC5zZXRUaXRsZSgnSW52YWxpZCBJRCcpXG4gICAgICAgICAgICAgICAgLnNldFVSTCgnaHR0cHM6Ly9naXRodWIuY29tL25hY3J0L1NreWJsb2NrQ2xpZW50LVJFUE8vYmxvYi9tYWluL2ZpbGVzL21vZHMuanNvbicpXG4gICAgICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGBUaGVyZSBkb2Vzbid0IHNlZW0gdG8gYmUgYSBtb2QgaW4gb3VyIHJlcG8gd2l0aCB0aGUgSUQgXFxgJHthcmdzLm1vZH1cXGAuXFxuVHJ5IGFnYWluIHdpdGggYSBuZXcgSUQsIG9yIGJyb3dzZSB0aGUgcmVwb3NpdG9yeSBieSBjbGlja2luZyB0aGUgdGl0bGUgb2YgdGhpcyBlbWJlZC5gKVxuICAgICAgICAgICAgICAgIC5zZXRDb2xvcignI2ZmMDAwMCcpXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoZXJyRW1iZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBkaXNwbGF5OiBuYW1lLCBkZXNjcmlwdGlvbiwgdXJsLCBpY29uLCBjcmVhdG9yLCBjb21tYW5kIH0gPSBtb2Q7XG5cbiAgICAgICAgY29uc3QgbW9kaW5mb2VtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXG4gICAgICAgICAgICAuc2V0Q29sb3IoJyM5YzI1YzQnKVxuICAgICAgICAgICAgLnNldFRpdGxlKG5hbWUpXG4gICAgICAgICAgICAuc2V0VGh1bWJuYWlsKGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbmFjcnQvU2t5YmxvY2tDbGllbnQtUkVQTy9tYWluL2ZpbGVzL2ljb25zLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGljb24pfWApXG4gICAgICAgICAgICAuc2V0Rm9vdGVyKGBDcmVhdGVkIGJ5ICR7Y3JlYXRvcn1gKVxuICAgICAgICAgICAgLmFkZEZpZWxkKFwiRGVzY3JpcHRpb25cIiwgZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAuYWRkRmllbGQoXCJNYWluIENvbW1hbmRcIiwgYFxcYCR7Y29tbWFuZH1cXGBgKTtcblxuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICBtb2RpbmZvZW1iZWQuYWRkRmllbGQoXCJEaXJlY3QgRG93bmxvYWRcIiwgYFtDbGljayBoZXJlIV0oJHt1cmx9KWApO1xuICAgICAgICAgICAgbGV0IHNpemUgPSBwYXJzZUludCgoYXdhaXQgYXhpb3MuaGVhZCh1cmwpKS5oZWFkZXJzW1wiY29udGVudC1sZW5ndGhcIl0sIDEwKTtcbiAgICAgICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICAgICAgbW9kaW5mb2VtYmVkLmFkZEZpZWxkKFwiU2l6ZVwiLCBgJHsoc2l6ZSAvIDFlKzYpfSBtZWdhYnl0ZXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQobW9kaW5mb2VtYmVkKTtcbiAgICB9XG59Il19