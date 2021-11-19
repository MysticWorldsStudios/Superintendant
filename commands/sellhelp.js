const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("All Sell Commands")
    .setDescription("Sells NightWing pets\nSI-sell_nightwing\nSI-sell_nw\n\nSells Food\nSI-sell_rations\nSI-sell_food\n\nSells Ore\nSI-sell_ore\nSI-sell_refinedmats\n\nSells Miningship\nSI-sell_miner\nSI-sell_miningship\n\nSells Freighters\nSI-sell_cf\nSI-sell_combatfreighter\n\nSells Heavy Assault Freighters\nSI-sell_hacf\nSI-sell_heavyassaultcombatfreighter\n\nSells Capital Ships\nSI-sell_cptl\nSI-sell_capitalship\n\nSells Heavy Assault Capital Ships\nSI-sell_hacptl\nSI-sell_heavyassaultcapitalship\n\n")

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'sell',
    aliases: ["sell_help"]
};