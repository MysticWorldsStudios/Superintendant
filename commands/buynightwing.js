const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || message.author
    let amount = 1000
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance

    if (author < 1000) { // if the authors balance is less than 1000, return this.
        return message.channel.send(':x: You need atleast 1000C to buy a NightWing Pet')
    }

    db.subtract(`money_${user.id}`, amount)
    db.add(`nightwing_${user.id}`, 1)
         
    
  let bal = await db.fetch(`money_${user.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Baught NightWing!`, message.author.displayAvatarURL)
    .addField(`Amount`, `1 NightWing`)
    .addField(`Balance Updated`, `${bal}C`)
    .setColor("Green") // random = "RANDOM"
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}
module.exports.help = {
    name: 'buy_nightwing',
    aliases: ["buy_nw"]
};
