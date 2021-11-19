const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("Universe")
    .setDescription("This is where All imformation about the expanded universe is stored.\nType SI-dossier_<entry> to get that dossier\nCurrent Creatures Dossiers here are\n\ndossier_dega / dossier_despondos\n\n")

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'dossier_universe',
    aliases: []
};