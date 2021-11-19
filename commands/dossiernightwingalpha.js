const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("The NightWing Alpha")
    .setDescription("The NightWing Alpha, passed off by alot of citizens as a Legend, this terrifying beast was so real it was extinct due to the threat it posed, The Alpha Nightwings were a terrifying product of the strongest nightwings consuming several tonnes of Jitterrin, they became so strong that they had to be extinct, before they made us extinct\n\n**Abilities**\n\nNightWing Alphas have the ability to send all nearby Nightwings into a Hivemind State meaning they will do as the Alpha commands, They could Reproduce Asexually meaning that a Alpha could birth several new alphas and can create flames so hot it could refuel a dying star.\n\n**Living Status:** ***Extinct***")
	.setImage(`https://i.postimg.cc/9QqXnKb5/Night-Wing-Alpha-png.png`)

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'dossier_nightwing_alpha',
    aliases: ["dossier_nwa"]
};