const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || message.author
    let amount = 150000
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance
    let miningship = await db.fetch(`miningship_${message.author.id}`) // fetch authors balance

    if (miningship > 0) { // if the authors balance is less than 15000, return this.
        return message.channel.send(':x: You already own a mining ship, you cannot own more than one')
    }

    if (author < 150000) { // if the authors balance is less than 15000, return this.
        return message.channel.send(':x: You need atleast 150,000$ to buy a Mining Ship')
    }

    db.subtract(`money_${user.id}`, amount)
    db.add(`miningship_${user.id}`, 1)
         
    
  let bal = await db.fetch(`money_${user.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Baught Mining Ship!`, message.author.displayAvatarURL)
    .addField(`Amount`, `1 Vessel`)
    .addField(`Balance Updated`, `${bal}C`)
	.setImage(`https://i.postimg.cc/NjFNb0Cj/Mining-Ship-Buy.png`)
    .setColor("Green") // random = "RANDOM"
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}
module.exports.help = {
    name: 'buy_miningship',
    aliases: ["buy_miner"]
};