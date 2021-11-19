const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("Dossiers")
    .setDescription("The JitterVerse is a huge expansive system with many people, creatures and a history so long that only 45% of it is actually documented(Just its not all on the bot yet!)\n Here are the current available Dossier Lists:\n\ndossier_creatures\n\ndossier_universe\n\n")

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'dossier_help',
    aliases: ["dossier_list","dossier"]
};