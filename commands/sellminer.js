const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || message.author
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance
    let miner = await db.fetch(`miningship_${message.author.id}`)

    if (miner < 1) { // if the authors got less than 1 return this.
        return message.channel.send(':x: You need to own a Mining Skiff to sell it!')
    }

    db.subtract(`miningship_${message.author.id}`, miner)
    db.add(`money_${user.id}`, 15000)
         
    
  let bal = await db.fetch(`money_${user.id}`)
  let minr = await db.fetch(`miningship_${message.author.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Successfully Sold a Mining Skiff!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${miner} Mining Skiff\nYou now have ${minr} Mining Skiffs`)
    .addField(`Balance Updated`, `${bal}C`)
    .setColor("Green") // random = "RANDOM"
    .setImage(`https://i.postimg.cc/NjFNb0Cj/Mining-Ship-Buy.png`)
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}
module.exports.help = {
    name: 'sell_miner',
    aliases: ["sell_miningship"]
};