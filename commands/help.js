const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("G.S.D Aurora")
    .setDescription("Currently defending the capital, Prevented 47352745 instances of piracy.")

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'help',
    aliases: ["cmds"]
};