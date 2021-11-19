const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("G.S.D Aurora")
    .setDescription("Guardian class System Defender(G.S.D) Aurora, the only Guardian Class A.I. in the JV Solar System, Her job is to operate all defencive weaponry, Energy shields and Defencing fleets, She was created by Allie Vizla (the sister to JVDC leader Night Vizla) after the Raven Dominion attack to defend the system from future attacks, Her existance was'nt publicly known till recently when Unknown Vessels began appearing in our space, Currently she is tracking the countless ship signatures closing in on Ecumenopolis Prime, and giving to the second updates on their positions to JVDC fleets")
	.setImage(`https://i.postimg.cc/pdbZMgyR/Aurora-Dossier-png.png`)

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'dossier_aurora',
    aliases: ["dossier_gsd_aurora"]
};