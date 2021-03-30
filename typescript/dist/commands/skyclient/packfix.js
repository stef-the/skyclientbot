"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class packfix extends discord_akairo_1.Command {
    constructor() {
        super("packfix", {
            aliases: ["packfix"]
        });
    }
    exec(message) {
        //console.log("[Command ran] packfix")
        return message.channel.send(`**If custom items don't appear:**
- Settings > Video Settings > Quality > Custom Items: ON

**If Custom Items don't work in hand:**
- Use sk1ers old animations instead of 1.7 Animations or any other Old Animations mod
- To get sk1ers old animations, apply for Beta Tester here: <https://sk1er.club/beta>

**If you crash in the Dwarven Mines or randomly in Dungeons**
- This is usually caused by connected textures. Set them to __Fast__ in the Video Settings
- If you still experience Crashes, upload the latest crashlog located in \`%appdata%\.minecraft\skyclient\crash-reports\``);
    }
}
exports.default = packfix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2ZpeC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9za3ljbGllbnQvcGFja2ZpeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUV6QyxNQUFxQixPQUFRLFNBQVEsd0JBQU87SUFDM0M7UUFDQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztTQUNwQixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQU87UUFDWCxzQ0FBc0M7UUFDdEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7OzBIQVM0RixDQUFDLENBQUE7SUFDMUgsQ0FBQztDQUNEO0FBcEJELDBCQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhY2tmaXggZXh0ZW5kcyBDb21tYW5kIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKFwicGFja2ZpeFwiLCB7XHJcblx0XHRcdGFsaWFzZXM6IFtcInBhY2tmaXhcIl0gXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGV4ZWMobWVzc2FnZSkge1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIltDb21tYW5kIHJhbl0gcGFja2ZpeFwiKVxyXG5cdFx0cmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGAqKklmIGN1c3RvbSBpdGVtcyBkb24ndCBhcHBlYXI6KipcclxuLSBTZXR0aW5ncyA+IFZpZGVvIFNldHRpbmdzID4gUXVhbGl0eSA+IEN1c3RvbSBJdGVtczogT05cclxuXHJcbioqSWYgQ3VzdG9tIEl0ZW1zIGRvbid0IHdvcmsgaW4gaGFuZDoqKlxyXG4tIFVzZSBzazFlcnMgb2xkIGFuaW1hdGlvbnMgaW5zdGVhZCBvZiAxLjcgQW5pbWF0aW9ucyBvciBhbnkgb3RoZXIgT2xkIEFuaW1hdGlvbnMgbW9kXHJcbi0gVG8gZ2V0IHNrMWVycyBvbGQgYW5pbWF0aW9ucywgYXBwbHkgZm9yIEJldGEgVGVzdGVyIGhlcmU6IDxodHRwczovL3NrMWVyLmNsdWIvYmV0YT5cclxuXHJcbioqSWYgeW91IGNyYXNoIGluIHRoZSBEd2FydmVuIE1pbmVzIG9yIHJhbmRvbWx5IGluIER1bmdlb25zKipcclxuLSBUaGlzIGlzIHVzdWFsbHkgY2F1c2VkIGJ5IGNvbm5lY3RlZCB0ZXh0dXJlcy4gU2V0IHRoZW0gdG8gX19GYXN0X18gaW4gdGhlIFZpZGVvIFNldHRpbmdzXHJcbi0gSWYgeW91IHN0aWxsIGV4cGVyaWVuY2UgQ3Jhc2hlcywgdXBsb2FkIHRoZSBsYXRlc3QgY3Jhc2hsb2cgbG9jYXRlZCBpbiBcXGAlYXBwZGF0YSVcXC5taW5lY3JhZnRcXHNreWNsaWVudFxcY3Jhc2gtcmVwb3J0c1xcYGApXHJcblx0fVxyXG59Il19