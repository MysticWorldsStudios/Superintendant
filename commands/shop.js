const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let infoembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
	.setThumbnail(bot.user.avatarURL())
    .setTitle("Welcome To The Shop!")
    .setDescription("**NightWing pet 1000C**: These creatures are like small Dragons, they live all over Ecumenopolis Prime, some can be tamed if you do the right thing.\n__**Commands**__\nSI-buy_nightwing\nSI-buy_nw\n\n**Food Rations 5C**: Distpite the word Rations being in the name, consuption of food doesnt need to be logged down like your in WW1, so buy as much as you want!\n__**Commands**__\nSI-buy_rations\nSI-buy_food\n\n**Mining Ship 150,000C**: The Standard Mining Skiff used by DSMC on Masser, it comes with a powerfull mining laser than can mine ore, be carefull not to overheat it though!\n__**Commands**__\nSI-buy_miner\nSI-buy_miningship\n\n**Combat Freighter 200,000C**: Small, Lightly Armoured and Fast, The best ship to use for small fleets!\n__**commands**__\nSI-buy_cf\nSI-buy_combat freighter\n\n**Heavy AssaultCombat Freighter 275,000C**: Small, Heavy Armoured and Armed to the teeth, This ship can handle 3 ships of simlar class on its own, perfect for any fleet commander!\n__**commands**__\nSI-buy_hacf\nSI-buy_heavyassaultcombatfreighter\n\n**Capital Ship 10,000,000C**: Large, Decent Armour and Well Armed, Good to take on larger fleets!\n__**commands**__\nSI-buy_cptl\nSI-buy_capitalship\n\n**Heavy Assault Capital Ship 20,000,000C**: Large, Hexa layered Heavy Armour and has more weapons than you can list, Some call this ship 'The One'!\n__**commands**__\nSI-buy_hacptl\nSI-buy_heavyassaultcapitalship")

    message.channel.send(infoembed)
}
  
module.exports.help = {
    name: 'shop',
    aliases: ["buyhelp"]
};