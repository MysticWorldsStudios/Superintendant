const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("Welcome To The Shop!")
    .setDescription("The item shop is currently in the works, Please give my owner time!")

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'shop',
    aliases: ["buyhelp"]
};