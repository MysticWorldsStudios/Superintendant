const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || message.author
    let amount = 500
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance
	let nwfirst = await db.fetch(`nightwing_${message.author.id}`)


    if (nwfirst < 1) { // if the authors got less than 1 nightwing, return this.
        return message.channel.send(':x: You need atleast 1 NightWing to sell one!')
    }

    db.subtract(`nightwing_${message.author.id}`, nwfirst)
    db.add(`money_${user.id}`, amount)
         
    
  let bal = await db.fetch(`money_${user.id}`)
  let nw = await db.fetch(`nightwing_${message.author.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Successfully Sold a NightWing`, message.author.displayAvatarURL)
    .addField(`Amount`, `${nwfirst} NightWings\nYou now have ${nw} NightWings`)
    .addField(`Balance Updated`, `${bal}C`)
    .setColor("Green") // random = "RANDOM"
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}
module.exports.help = {
    name: 'sell_nightwing',
    aliases: ["sell_nw"]
};
