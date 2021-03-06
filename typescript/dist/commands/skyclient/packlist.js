"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const curl = require("curlrequest");
class packlist extends discord_akairo_1.Command {
    constructor() {
        super("packlist", {
            aliases: ["skyclientpacklist", "scpacklist", "scpacks", "packs", "packlist"]
        });
    }
    exec(message) {
        curl.request({ url: "https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/packs.json" }, (e, data) => {
            data = JSON.parse(data);
            const modsEmbed = new discord_js_1.MessageEmbed()
                .setColor('#9c25c4')
                .setTitle('SkyClient Resource Pack List');
            data.forEach(element => {
                if (element.display && element.display != "no" && element.hidden != true) {
                    let mods = "";
                    if (element.display.includes("Bundle")) {
                        element.actions.forEach(e => {
                            if (e.text && e.text != "Guide") {
                                mods = mods + e.text + ", ";
                            }
                        });
                        mods = mods.substring(0, mods.length - 2);
                    }
                    else {
                        if (element.display && element.creator && element.display != "no" && element.discordcode) {
                            mods = `Creator: [${element.creator}](https://discord.gg/${element.discordcode})\nPack ID: \`${element.id}\``;
                        }
                        else if (element.creator == `_HeroBear_`) {
                            mods = `Creator: \\${element.creator}\nPack ID: \`${element.id}\``;
                        }
                        else {
                            mods = `Creator: ${element.creator}\nPack ID: \`${element.id}\``;
                        }
                    }
                    modsEmbed.addField(`${element.display}`, mods, true);
                }
            });
            message.channel.send(modsEmbed);
        });
    }
}
exports.default = packlist;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvc2t5Y2xpZW50L3BhY2tsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUEwQztBQUUxQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFHcEMsTUFBcUIsUUFBUyxTQUFRLHdCQUFPO0lBQzVDO1FBQ0MsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNqQixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7U0FDNUUsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksQ0FBQyxPQUFPO1FBRUwsSUFBSSxDQUFDLE9BQU8sQ0FDUixFQUFDLEdBQUcsRUFBRSxtRkFBbUYsRUFBQyxFQUMxRixDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUVSLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXhCLE1BQU0sU0FBUyxHQUFHLElBQUkseUJBQVksRUFBRTtpQkFDbkMsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsUUFBUSxDQUFDLDhCQUE4QixDQUFDLENBQUE7WUFFekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbkIsSUFBRyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO29CQUNyRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7b0JBRWIsSUFBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDbkMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBRXhCLElBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtnQ0FFNUIsSUFBSSxHQUFHLElBQUksR0FBQyxDQUFDLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQTs2QkFDMUI7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUE7cUJBQzFDO3lCQUNJO3dCQUNELElBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7NEJBQ3JGLElBQUksR0FBRyxhQUFhLE9BQU8sQ0FBQyxPQUFPLHdCQUF3QixPQUFPLENBQUMsV0FBVyxpQkFBaUIsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFBO3lCQUNoSDs2QkFDSSxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksWUFBWSxFQUFDOzRCQUNyQyxJQUFJLEdBQUcsY0FBYyxPQUFPLENBQUMsT0FBTyxnQkFBZ0IsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFBO3lCQUNyRTs2QkFDRzs0QkFDQSxJQUFJLEdBQUcsWUFBWSxPQUFPLENBQUMsT0FBTyxnQkFBZ0IsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFBO3lCQUNuRTtxQkFDSjtvQkFFRCxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtpQkFFdkQ7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FDSixDQUFBO0lBQ1IsQ0FBQztDQUNEO0FBckRELDJCQXFEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcbmltcG9ydCB7IE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XG5cbmNvbnN0IGN1cmwgPSByZXF1aXJlKFwiY3VybHJlcXVlc3RcIik7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFja2xpc3QgZXh0ZW5kcyBDb21tYW5kIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJwYWNrbGlzdFwiLCB7XG5cdFx0XHRhbGlhc2VzOiBbXCJza3ljbGllbnRwYWNrbGlzdFwiLCBcInNjcGFja2xpc3RcIiwgXCJzY3BhY2tzXCIsIFwicGFja3NcIiwgXCJwYWNrbGlzdFwiXSBcblx0XHR9KTtcblx0fVxuXG5cdGV4ZWMobWVzc2FnZSkge1xuXG4gICAgICAgIGN1cmwucmVxdWVzdChcbiAgICAgICAgICAgIHt1cmw6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25hY3J0L1NreWJsb2NrQ2xpZW50LVJFUE8vbWFpbi9maWxlcy9wYWNrcy5qc29uXCJ9LCBcbiAgICAgICAgICAgIChlLCBkYXRhKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHNFbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxuICAgICAgICAgICAgICAgIC5zZXRDb2xvcignIzljMjVjNCcpXG4gICAgICAgICAgICAgICAgLnNldFRpdGxlKCdTa3lDbGllbnQgUmVzb3VyY2UgUGFjayBMaXN0JylcblxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5kaXNwbGF5ICYmIGVsZW1lbnQuZGlzcGxheSAhPSBcIm5vXCIgJiYgZWxlbWVudC5oaWRkZW4gIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZHMgPSBcIlwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuZGlzcGxheS5pbmNsdWRlcyhcIkJ1bmRsZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWN0aW9ucy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50ZXh0ICYmIGUudGV4dCAhPSBcIkd1aWRlXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kcyA9IG1vZHMrZS50ZXh0K1wiLCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kcyA9IG1vZHMuc3Vic3RyaW5nKDAsIG1vZHMubGVuZ3RoLTIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmRpc3BsYXkgJiYgZWxlbWVudC5jcmVhdG9yICYmIGVsZW1lbnQuZGlzcGxheSAhPSBcIm5vXCIgJiYgZWxlbWVudC5kaXNjb3JkY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RzID0gYENyZWF0b3I6IFske2VsZW1lbnQuY3JlYXRvcn1dKGh0dHBzOi8vZGlzY29yZC5nZy8ke2VsZW1lbnQuZGlzY29yZGNvZGV9KVxcblBhY2sgSUQ6IFxcYCR7ZWxlbWVudC5pZH1cXGBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuY3JlYXRvciA9PSBgX0hlcm9CZWFyX2Ape1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RzID0gYENyZWF0b3I6IFxcXFwke2VsZW1lbnQuY3JlYXRvcn1cXG5QYWNrIElEOiBcXGAke2VsZW1lbnQuaWR9XFxgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RzID0gYENyZWF0b3I6ICR7ZWxlbWVudC5jcmVhdG9yfVxcblBhY2sgSUQ6IFxcYCR7ZWxlbWVudC5pZH1cXGBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RzRW1iZWQuYWRkRmllbGQoYCR7ZWxlbWVudC5kaXNwbGF5fWAsIG1vZHMsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmNoYW5uZWwuc2VuZChtb2RzRW1iZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApIFxuXHR9XG59XG4iXX0=