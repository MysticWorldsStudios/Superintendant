const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("A.I. Dossier")
    .setDescription("The JitterVerse has many Resident A.I. From the Superintendant to just a basic Law Enforcement Bot!\n Here are the current available Dossier Entries:\n\ndossier_aurora\n\n")

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'dossier_ai',
    aliases: ["dossier_bots","dossier_artificial_intelligence"]
};