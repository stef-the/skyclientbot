"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const curl = require("curlrequest");
class packinfo extends discord_akairo_1.Command {
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
        curl.request({ url: "https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/packs.json" }, (e, data) => {
            data = JSON.parse(data);
            let found;
            const packinfoembed = new discord_js_1.MessageEmbed()
                .setColor('#9c25c4');
            data.forEach(element => {
                if (element.display && element.display != "no" && element.hidden != true) {
                    let pack = "";
                    if (args.pack == element.id) {
                        let packname;
                        if (element.display) {
                            packname = element.display;
                        }
                        if (element.description) {
                            packinfoembed.addFields({ name: `Description`, value: element.description });
                        }
                        if (element.url) {
                            packinfoembed.addFields({ name: `Direct Download`, value: `[Click here!](${element.url})` });
                        }
                        if (element.icon) {
                            packinfoembed.setThumbnail(`https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/icons/${encodeURIComponent(element.icon)}`);
                        }
                        if (element.creator) {
                            packinfoembed.setFooter(`Created by ${element.creator}`);
                        }
                        if (element.command) {
                            packinfoembed.addFields({ name: `Main Command`, value: `\`${element.command}\`` });
                        }
                        packinfoembed.setTitle(packname);
                        found = true;
                    }
                }
            });
            if (found != true) {
                const errEmbed = new discord_js_1.MessageEmbed()
                    .setTitle('Invalid ID')
                    .setURL('https://github.com/nacrt/SkyblockClient-REPO/blob/main/files/packs.json')
                    .setDescription(`There doesn't seem to be a pack in our repo with the ID \`${args.pack}\`.\nTry again with a new ID, or browse the repository by clicking the title of this embed.`)
                    .setColor('#ff0000');
                message.channel.send(errEmbed);
            }
            else if (found = true) {
                message.channel.send(packinfoembed);
            }
        });
    }
}
exports.default = packinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2luZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvc2t5Y2xpZW50L3BhY2tpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUEwQztBQUUxQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFHcEMsTUFBcUIsUUFBUyxTQUFRLHdCQUFPO0lBQ3pDO1FBQ0ksS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNkLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLE1BQU07b0JBQ1YsSUFBSSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0o7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJO1FBRWQsSUFBSSxDQUFDLE9BQU8sQ0FDUixFQUFFLEdBQUcsRUFBRSxtRkFBbUYsRUFBRSxFQUM1RixDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUVSLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLElBQUksS0FBSyxDQUFBO1lBQ1QsTUFBTSxhQUFhLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2lCQUN2QyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7WUFFcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFFbkIsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO29CQUN0RSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7b0JBR2IsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUU7d0JBSXpCLElBQUksUUFBUSxDQUFBO3dCQUVaLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTs0QkFDakIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUE7eUJBQzdCO3dCQUNELElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTs0QkFDckIsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO3lCQUMvRTt3QkFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7NEJBQ2IsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUE7eUJBQy9GO3dCQUNELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTs0QkFDZCxhQUFhLENBQUMsWUFBWSxDQUFDLGdGQUFnRixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO3lCQUNqSjt3QkFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7NEJBQ2pCLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBYyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTt5QkFDM0Q7d0JBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFOzRCQUNqQixhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsS0FBSyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFBO3lCQUNyRjt3QkFFRCxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO3dCQUloQyxLQUFLLEdBQUcsSUFBSSxDQUFBO3FCQUNmO2lCQUdKO1lBRUwsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2YsTUFBTSxRQUFRLEdBQUcsSUFBSSx5QkFBWSxFQUFFO3FCQUM5QixRQUFRLENBQUMsWUFBWSxDQUFDO3FCQUN0QixNQUFNLENBQUMseUVBQXlFLENBQUM7cUJBQ2pGLGNBQWMsQ0FBQyw2REFBNkQsSUFBSSxDQUFDLElBQUksNkZBQTZGLENBQUM7cUJBQ25MLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7YUFDakM7aUJBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFO2dCQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUN0QztRQUNMLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztDQUNKO0FBaEZELDJCQWdGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcbmltcG9ydCB7IE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XG5cbmNvbnN0IGN1cmwgPSByZXF1aXJlKFwiY3VybHJlcXVlc3RcIik7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFja2luZm8gZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJwYWNraW5mb1wiLCB7XG4gICAgICAgICAgICBhbGlhc2VzOiBbXCJwYWNrXCJdLFxuICAgICAgICAgICAgYXJnczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdwYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4ZWMobWVzc2FnZSwgYXJncykge1xuXG4gICAgICAgIGN1cmwucmVxdWVzdChcbiAgICAgICAgICAgIHsgdXJsOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9uYWNydC9Ta3libG9ja0NsaWVudC1SRVBPL21haW4vZmlsZXMvcGFja3MuanNvblwiIH0sXG4gICAgICAgICAgICAoZSwgZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kXG4gICAgICAgICAgICAgICAgY29uc3QgcGFja2luZm9lbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxuICAgICAgICAgICAgICAgIC5zZXRDb2xvcignIzljMjVjNCcpXG5cbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGlzcGxheSAmJiBlbGVtZW50LmRpc3BsYXkgIT0gXCJub1wiICYmIGVsZW1lbnQuaGlkZGVuICE9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYWNrID0gXCJcIlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLnBhY2sgPT0gZWxlbWVudC5pZCkge1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYWNrbmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGlzcGxheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWNrbmFtZSA9IGVsZW1lbnQuZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWNraW5mb2VtYmVkLmFkZEZpZWxkcyh7IG5hbWU6IGBEZXNjcmlwdGlvbmAsIHZhbHVlOiBlbGVtZW50LmRlc2NyaXB0aW9uIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWNraW5mb2VtYmVkLmFkZEZpZWxkcyh7IG5hbWU6IGBEaXJlY3QgRG93bmxvYWRgLCB2YWx1ZTogYFtDbGljayBoZXJlIV0oJHtlbGVtZW50LnVybH0pYCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pY29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhY2tpbmZvZW1iZWQuc2V0VGh1bWJuYWlsKGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbmFjcnQvU2t5YmxvY2tDbGllbnQtUkVQTy9tYWluL2ZpbGVzL2ljb25zLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGVsZW1lbnQuaWNvbil9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY3JlYXRvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWNraW5mb2VtYmVkLnNldEZvb3RlcihgQ3JlYXRlZCBieSAke2VsZW1lbnQuY3JlYXRvcn1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhY2tpbmZvZW1iZWQuYWRkRmllbGRzKHsgbmFtZTogYE1haW4gQ29tbWFuZGAsIHZhbHVlOiBgXFxgJHtlbGVtZW50LmNvbW1hbmR9XFxgYCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhY2tpbmZvZW1iZWQuc2V0VGl0bGUocGFja25hbWUpXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJFbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKCdJbnZhbGlkIElEJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRVUkwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9uYWNydC9Ta3libG9ja0NsaWVudC1SRVBPL2Jsb2IvbWFpbi9maWxlcy9wYWNrcy5qc29uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgVGhlcmUgZG9lc24ndCBzZWVtIHRvIGJlIGEgcGFjayBpbiBvdXIgcmVwbyB3aXRoIHRoZSBJRCBcXGAke2FyZ3MucGFja31cXGAuXFxuVHJ5IGFnYWluIHdpdGggYSBuZXcgSUQsIG9yIGJyb3dzZSB0aGUgcmVwb3NpdG9yeSBieSBjbGlja2luZyB0aGUgdGl0bGUgb2YgdGhpcyBlbWJlZC5gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldENvbG9yKCcjZmYwMDAwJylcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQoZXJyRW1iZWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZvdW5kID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNoYW5uZWwuc2VuZChwYWNraW5mb2VtYmVkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==