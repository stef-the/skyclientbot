"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class download extends discord_akairo_1.Command {
    constructor() {
        super("download", {
            aliases: ["download"]
        });
    }
    exec(message) {
        //console.log("[Command ran] download")
        return message.channel.send("https://github.com/nacrt/SkyblockClient/releases/latest");
    }
}
exports.default = download;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvc2t5Y2xpZW50L2Rvd25sb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBRXpDLE1BQXFCLFFBQVMsU0FBUSx3QkFBTztJQUM1QztRQUNDLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQ3JCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBTztRQUNYLHVDQUF1QztRQUN2QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHlEQUF5RCxDQUFDLENBQUE7SUFDdkYsQ0FBQztDQUNEO0FBWEQsMkJBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkb3dubG9hZCBleHRlbmRzIENvbW1hbmQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoXCJkb3dubG9hZFwiLCB7XHJcblx0XHRcdGFsaWFzZXM6IFtcImRvd25sb2FkXCJdIFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRleGVjKG1lc3NhZ2UpIHtcclxuXHRcdC8vY29uc29sZS5sb2coXCJbQ29tbWFuZCByYW5dIGRvd25sb2FkXCIpXHJcblx0XHRyZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoXCJodHRwczovL2dpdGh1Yi5jb20vbmFjcnQvU2t5YmxvY2tDbGllbnQvcmVsZWFzZXMvbGF0ZXN0XCIpXHJcblx0fVxyXG59Il19