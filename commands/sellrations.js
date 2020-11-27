const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || message.author
    let amount = 5
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance
    let rastart = await db.fetch(`rations_${message.author.id}`)

    if (rastart < 1) { // if the authors got less than 1 return this.
        return message.channel.send(':x: You need atleast 1 lot of Food Rations to sell!')
    }

    db.subtract(`rations_${message.author.id}`, rastart * 5)
    db.add(`money_${user.id}`, amount)
         
    
  let bal = await db.fetch(`money_${user.id}`)
  let ra = await db.fetch(`rations_${message.author.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Successfully Sold Food Rations!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${rastart} food rations\nYou now have ${ra} food rations`)
    .addField(`Balance Updated`, `${bal}C`)
    .setColor("Green") // random = "RANDOM"
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}
module.exports.help = {
    name: 'sell_rations',
    aliases: ["sell_food"]
};
