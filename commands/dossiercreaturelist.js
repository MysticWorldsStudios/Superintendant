const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("Creature Dossiers")
    .setDescription("This is where All imformation on the wonderous wildlife of the Jitterverse is stored.\nType SI-dossier_<entry> to get its dossier.\nCurrent Creatures Dossiers here are\n\n_nightwing\n\n_nightwing_alpha\n\n")

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'dossier_creatures',
    aliases: ["dossier_c"]
};