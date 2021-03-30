"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const jsonfile = require('jsonfile');
const file = 'src/config/global/superusers.json';
class superuser extends discord_akairo_1.Command {
    constructor() {
        super('superuser', {
            aliases: ['superuser'],
            args: [
                {
                    id: 'member',
                    type: 'member'
                }
            ],
            channel: 'guild'
        });
    }
    async exec(message, args) {
        jsonfile.readFile(file)
            .then(superuserfile => {
            if (superuserfile.superusers.includes(args.member.id)) {
                message.channel.send("that member is already a superuser, so i did nothing");
            }
            /*else if (they're already in the file) {
                remove them from the file
            }*/
            else {
                superuserfile.superusers.push(args.member.id);
                jsonfile.writeFile(file, superuserfile);
                message.channel.send(`${args.member} is now a superuser.`);
            }
            console.log(superuserfile);
        })
            .catch(error => console.log(error));
    }
}
exports.default = superuser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXJ1c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL293bmVyL3N1cGVydXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUV6QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDcEMsTUFBTSxJQUFJLEdBQUcsbUNBQW1DLENBQUE7QUFFaEQsTUFBcUIsU0FBVSxTQUFRLHdCQUFPO0lBQzFDO1FBQ0ksS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUN0QixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0o7WUFDRCxPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSTtRQUVwQixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzthQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFFbEIsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNuRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzREFBc0QsQ0FBQyxDQUFBO2FBQy9FO1lBRUQ7O2VBRUc7aUJBRUU7Z0JBQ0QsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDN0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUE7Z0JBQ3ZDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sc0JBQXNCLENBQUMsQ0FBQTthQUM3RDtZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQzNDLENBQUM7Q0FDSjtBQXJDRCw0QkFxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xuXG5jb25zdCBqc29uZmlsZSA9IHJlcXVpcmUoJ2pzb25maWxlJylcbmNvbnN0IGZpbGUgPSAnc3JjL2NvbmZpZy9nbG9iYWwvc3VwZXJ1c2Vycy5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdXBlcnVzZXIgZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3N1cGVydXNlcicsIHtcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnc3VwZXJ1c2VyJ10sXG4gICAgICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ21lbWJlcicsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtZW1iZXInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNoYW5uZWw6ICdndWlsZCdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZXhlYyhtZXNzYWdlLCBhcmdzKSB7XG5cbiAgICAgICAganNvbmZpbGUucmVhZEZpbGUoZmlsZSlcbiAgICAgICAgICAgIC50aGVuKHN1cGVydXNlcmZpbGUgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydXNlcmZpbGUuc3VwZXJ1c2Vycy5pbmNsdWRlcyhhcmdzLm1lbWJlci5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQoXCJ0aGF0IG1lbWJlciBpcyBhbHJlYWR5IGEgc3VwZXJ1c2VyLCBzbyBpIGRpZCBub3RoaW5nXCIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyplbHNlIGlmICh0aGV5J3JlIGFscmVhZHkgaW4gdGhlIGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlIHRoZW0gZnJvbSB0aGUgZmlsZVxuICAgICAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVydXNlcmZpbGUuc3VwZXJ1c2Vycy5wdXNoKGFyZ3MubWVtYmVyLmlkKVxuICAgICAgICAgICAgICAgICAgICBqc29uZmlsZS53cml0ZUZpbGUoZmlsZSwgc3VwZXJ1c2VyZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQoYCR7YXJncy5tZW1iZXJ9IGlzIG5vdyBhIHN1cGVydXNlci5gKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1cGVydXNlcmZpbGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICB9XG59XG4iXX0=