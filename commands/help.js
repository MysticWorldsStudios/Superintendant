const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail('https://cdn.discordapp.com/emojis/648087567761408001.gif?v=1')
    .setTitle("AGIS Security Protocol, Because Security Is Best Done By A Bot!")
    .setDescription("__**Commands loaded into the bot:**__\n\n__**serverinfo**__ - Shows info about the server\n__**botinfo**__ - Shows info about the bot\n__**help**__ - Shows the available commands (__This command__)\n__**Moderation Commands**__\n__**Kick**__ - Kicks the user from the server, no need for a reason\n__**ban**__ - Bans the user, no need for a reason, i cannot ban users higher than me\nAGIS also has Easter Egg commands not listed here, try and find them")
	.addFields(
	{ name: 'Server Invite', value: '[Support Server Link](https://discord.gg/bJMchda)' , inline: true },
	{ name: 'My Invite', value: '[Invite me!](https://discord.com/oauth2/authorize?client_id=609472610308325386&scope=bot)', inline: true },
	{ name: 'My General Use Counterpart', value: '[Invite Them!](https://discord.com/oauth2/authorize?client_id=609471037804904507&scope=bot)', inline: true },
	{ name: 'Attention!', value: 'We need Administrator to work correctly and as intended!'},
	)
	.setFooter('Join the Support Server for updates on the bots development', 'https://cdn.discordapp.com/emojis/648087567761408001.gif?v=1');

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'help',
    aliases: ["cmds"]
};