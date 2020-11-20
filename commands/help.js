const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("Im Superintendant, Here' s my Stuff! <:SIBlehh:647918866370134027>")
    .setDescription("-----**My Commands**-----\n**reload**-- Realoads the command G.U.N (incase it breaks)\n**afk**-- Places you on the afk list, Just say why after you type it\n**hm**-- For when you need me to think for you!\n**test**-- Because i apparently have a test command\n**noob**-- Who is the biggest noob?\n**botinfo**-- Tells you my info, if you wanted to know!\n**-----Economey Commands-----**\n**balance/bal** - Checks your accounts credit balance\n**work <job>** - Does work for that specific job\n**work_help** - Tells you what jobs are available\n**rob** - Robs a user of a max of 200 credits\n**daily** - Gives you your daily credits")
	.addFields(
	{ name: 'Server Invite', value: '[Support Server Link](https://discord.gg/bJMchda)' , inline: true },
	{ name: 'My Invite', value: '[Invite Me!](https://discord.com/oauth2/authorize?client_id=609471037804904507&scope=bot)', inline: true },
	{ name: 'My ModBot Counterpart', value: '[Invite them!](https://discord.com/oauth2/authorize?client_id=609472610308325386&scope=bot)', inline: true },
	{ name: 'Attention!', value: 'We need Administrator to work correctly and as intended!'},
	)
	.setFooter('Join the Support Server for updates on the bots development', 'https://cdn.discordapp.com/avatars/609471037804904507/fd43572fee2234ab87e4f2627531507d.webp');

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'help',
    aliases: ["cmds"]
};