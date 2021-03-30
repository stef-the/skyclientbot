"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class github extends discord_akairo_1.Command {
    constructor() {
        super("github", {
            aliases: ["github", "sourcecode"]
        });
    }
    exec(message) {
        //console.log("[Command ran] github")
        return message.channel.send("https://github.com/nacrt/SkyblockClient");
    }
}
exports.default = github;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3NreWNsaWVudC9naXRodWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFFekMsTUFBcUIsTUFBTyxTQUFRLHdCQUFPO0lBQzFDO1FBQ0MsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUM7U0FDakMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksQ0FBQyxPQUFPO1FBQ1gscUNBQXFDO1FBQ3JDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQTtJQUN2RSxDQUFDO0NBQ0Q7QUFYRCx5QkFXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdpdGh1YiBleHRlbmRzIENvbW1hbmQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoXCJnaXRodWJcIiwge1xyXG5cdFx0XHRhbGlhc2VzOiBbXCJnaXRodWJcIiwgXCJzb3VyY2Vjb2RlXCJdIFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRleGVjKG1lc3NhZ2UpIHtcclxuXHRcdC8vY29uc29sZS5sb2coXCJbQ29tbWFuZCByYW5dIGdpdGh1YlwiKVxyXG5cdFx0cmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKFwiaHR0cHM6Ly9naXRodWIuY29tL25hY3J0L1NreWJsb2NrQ2xpZW50XCIpXHJcblx0fVxyXG59Il19