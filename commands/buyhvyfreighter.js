const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || message.author
    let amount = 275000
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance
    let freighter = await db.fetch(`hvyfreighter_${message.author.id}`) // fetch authors balance

    if (freighter > 4) { // if the authors balance is less than 15000, return this.
        return message.channel.send(':x: You own the maximum amount of Heavy Assault Freighters')
    }

    if (author < 275000) { // if the authors balance is less than 75000, return this.
        return message.channel.send(':x: You need atleast 275,000$ to buy a Combat Freighter')
    }

    db.subtract(`money_${user.id}`, amount)
    db.add(`hvyfreighter_${user.id}`, 1)
         
    
  let bal = await db.fetch(`money_${user.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Baught Heavy Assault Combat Freighter!`, message.author.displayAvatarURL)
    .addField(`Amount`, `1 Vessel`)
    .addField(`Balance Updated`, `${bal}C`)
	.setImage(`https://i.postimg.cc/T3DHJgmR/Heavy-Assault-Combat-Freighter.png`)
    .setColor("Green") // random = "RANDOM"
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}
module.exports.help = {
    name: 'buy_hacf',
    aliases: ["buy_heavyassaultcombatfreighter"]
};