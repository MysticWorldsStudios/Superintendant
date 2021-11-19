const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("Despondos")
    .setDescription("Also known by the shorter name Dega, Despondos is a empty dimension parallel to the multiverse, it is nothing but empty void, and was going to remain that way for eternity, until the actions of the Aethers dragged Mensa(the galaxy) from its spot into Dega to save the universe(and the multiverse) from The Hoard, although they succeeded in the movement of the galaxy, a few hoard ships managed to escape. (Read The Hoard factions dossier for more info about them)")
	.setImage(``)

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'dossier_despondos',
    aliases: ["dossier_dega"]
};