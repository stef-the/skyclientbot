import { Command } from "discord-akairo";
import Discord from 'discord.js';

export default class skyclientinfo extends Command {
	constructor() {
		super("skyclientinfo", {
			aliases: ["skyclientinfo", "scinfo", "skyblockclientinfo", "faq"] 
		});
	}

	exec(message) {
		const SkyClientInfo = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('SkyClient Information')
	.setURL('')
	//.setAuthor('SkyClient Info', 'https://cdn.discordapp.com/emojis/813444028892577843.gif?v=1', '')
	//.setDescription('Some description here')
	//.setThumbnail('https://cdn.discordapp.com/emojis/813444028892577843.gif?v=1')
	.addFields(
		{ name: 'What even is SkyClient?', value: 'A fancy modpack. It isn\'t a client, and we have no plans to make it be one.' },
		//{ name: 'example', value: 'example'},
		{ name: 'How do I install it?', value: 'https://youtu.be/2sCmaMqx-cQ \nThis video was made the same day as we released it, but everything is similar enough.'},
		{ name: 'How do I add mods that aren\'t in SkyClient by default to SkyClient?', value: 'https://youtu.be/Y7AyoDMsFdY \nNote: You do not have to delete anything.'},
		{ name: 'How do I update a mod?', value: 'https://youtu.be/Y7AyoDMsFdY \nDelete the old version of the mod, and replace it with the new one, like in the video.'},
		{ name: 'Can you add a togglesprint mod?', value: 'We were going to include Powns ToggleSneak, PotionHud, and ArmorHud, but Powns said we couldn\'t include his. If you want them, the links are here:\nhttps://download.powns.dev/armorhud189\nhttps://download.powns.dev/potionhud189\nhttps://download.powns.dev/togglesneak189'},
		{ name: 'Can I donate to you?', value: 'No. If you want to give community creators money, give it to https://www.patreon.com/moulberry. His servers cost 80 Australian dollars each month, spends his entire free time coding, and barely makes more than he\'s spending on it.'},
		//{ name: '\u200B', value: '\u200B' },
		//{ name: 'Inline field title', value: 'Some value here', inline: true },
		//{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	//.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	//.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

message.channel.send(SkyClientInfo);
	}
}