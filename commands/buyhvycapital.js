const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || message.author
    let amount = 20000000
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance
    let freighter = await db.fetch(`hvycptl_${message.author.id}`) // fetch authors balance

    if (freighter > 1) { // if the authors balance is less than 15000, return this.
        return message.channel.send(':x: You cannon own more than 2 heavy assault capital ships')
    }

    if (author < 20000000) { // if the authors balance is less than 50000, return this.
        return message.channel.send(':x: You need atleast 20,000,000$ to buy a Heavy Assault Capital Ship')
    }

    db.subtract(`money_${user.id}`, amount)
    db.add(`hvycptl_${user.id}`, 1)
         
    
  let bal = await db.fetch(`money_${user.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Baught Heavy Assault Captial Ship!`, message.author.displayAvatarURL)
    .addField(`Amount`, `1 Vessel`)
    .addField(`Balance Updated`, `${bal}C`)
	.setImage(`https://i.postimg.cc/XvnRVWsM/hvy-capital-buy.png`)
    .setColor("Green") // random = "RANDOM"
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}
module.exports.help = {
    name: 'buy_hacptl',
    aliases: ["buy_heavyassaultcapitalship"]
};