"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class github extends discord_akairo_1.Command {
    constructor() {
        super("repo", {
            aliases: ["repo", "repository", "skyclientrepo"]
        });
    }
    exec(message) {
        //console.log("[Command ran] repo")
        return message.channel.send("https://github.com/nacrt/SkyblockClient-REPO/");
    }
}
exports.default = github;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9za3ljbGllbnQvcmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUV6QyxNQUFxQixNQUFPLFNBQVEsd0JBQU87SUFDMUM7UUFDQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUM7U0FDaEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksQ0FBQyxPQUFPO1FBQ1gsbUNBQW1DO1FBQ25DLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0NBQStDLENBQUMsQ0FBQTtJQUM3RSxDQUFDO0NBQ0Q7QUFYRCx5QkFXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdpdGh1YiBleHRlbmRzIENvbW1hbmQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoXCJyZXBvXCIsIHtcclxuXHRcdFx0YWxpYXNlczogW1wicmVwb1wiLCBcInJlcG9zaXRvcnlcIiwgXCJza3ljbGllbnRyZXBvXCJdIFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRleGVjKG1lc3NhZ2UpIHtcclxuXHRcdC8vY29uc29sZS5sb2coXCJbQ29tbWFuZCByYW5dIHJlcG9cIilcclxuXHRcdHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZChcImh0dHBzOi8vZ2l0aHViLmNvbS9uYWNydC9Ta3libG9ja0NsaWVudC1SRVBPL1wiKVxyXG5cdH1cclxufSJdfQ==