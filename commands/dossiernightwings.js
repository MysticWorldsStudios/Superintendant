const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("The Nightwing")
    .setDescription("NightWings, So common around Ecumenopolis Prime they almost replace birds. They can be identified by their dragon like apperance, dark purple scales, bright pink wings and dim glowing green veins with bright green eyes. They live on the surface, the highest lower city platforms and the preservation deck, though they never used to be this way.\n\n**History**\n\nThe NightWing can be traced back to the Landfall era when our colony ship landed on the surface, they used to have all black scales and orange glowing eyes and were cautious of us at first, some nightwings stole Jitterrin Crystals and found out they could significantly help them, it made their special fire breathing ability more powerfull and even toughened their scales upon contact, over the years while the city was still a small coloney they slowly managed to evolve to have Jitterrin permenantly inside them, and they slowly began to take the look of modern Nightwings, during the citys expansion all life on the planet was Digitised and placed into storage devices to be released onto a preservation deck in the far future, once that happened and all life was released back onto a perfect remake of the planets Enviroment a few escaped into the city and thats how the modern NightWing came to be.\n\n**Abilities**\n\nNightwings have a number of amazing abilities, from being able to cloak themselves to almost invisible, to being able to shoot fire and even fly faster than the speed of sound for a short time, Nightwings are very talanted creatures, and are still gaining new abilities to help them live in the city\n\n**Living Status:** ***Living in Abundance***")
	.setImage(`https://i.postimg.cc/mg7TTMHt/Nightwing-png.png`)

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'dossier_nightwing',
    aliases: ["dossier_nw"]
};