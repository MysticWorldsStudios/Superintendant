const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || message.author
    let amount = 10000000
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance
    let freighter = await db.fetch(`cptl_${message.author.id}`) // fetch authors balance

    if (freighter > 1) { // if the authors balance is less than 15000, return this.
        return message.channel.send(':x: You cannon own more than 2 capital ships')
    }

    if (author < 10000000) { // if the authors balance is less than 50000, return this.
        return message.channel.send(':x: You need atleast 10,000,000$ to buy a Capital Ship')
    }

    db.subtract(`money_${user.id}`, amount)
    db.add(`cptl_${user.id}`, 1)
         
    
  let bal = await db.fetch(`money_${user.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Baught Captial Ship!`, message.author.displayAvatarURL)
    .addField(`Amount`, `1 Vessel`)
    .addField(`Balance Updated`, `${bal}C`)
	.setImage(`https://i.postimg.cc/xTDYWwVQ/capital-buy.png`)
    .setColor("Green") // random = "RANDOM"
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}
module.exports.help = {
    name: 'buy_cptl',
    aliases: ["buy_capitalship"]
};