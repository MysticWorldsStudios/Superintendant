const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || message.author
    let broke = 0
    let amount = 1000
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance

    if (author < 1000) { // if the authors balance is less than 1000, return this.
        return message.channel.send(':x: You need atleast 1000$ to buy a NightWing Pet')
    }
    if (isNaN(args[0])) return message.channel.send(`${message.author}, you need to input a valid number to buy!.`) // if args[0] (first input) is not a number, return.

    db.subtract(`money_${user.id}`, args[0] * amount)
    db.add(`nightwing_${user.id}`, args[0])
         
    
  let bal = await db.fetch(`money_${user.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Baught NightWing!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${args[0]} NightWings`)
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