const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || message.author
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance
    let refore = await db.fetch(`refinedore_${message.author.id}`)
	let oreprice = Math.floor(Math.random() * 50) + 1;

    if (refore < 1) { // if the authors got less than 1 return this.
        return message.channel.send(':x: You need atleast 1 Tonne of Refined Materials to sell!')
    }

    db.subtract(`refinedore_${message.author.id}`, refore)
    db.add(`money_${user.id}`, refore * oreprice)
         
    
  let bal = await db.fetch(`money_${user.id}`)
  let reforeafter = await db.fetch(`refinedore_${message.author.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Successfully Sold Refined Materials!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${refore}T\nThe Refined Ores Sold at a price of ${oreprice}C each!`)
    .addField(`Balance Updated`, `${bal}C`)
    .setColor("Green") // random = "RANDOM"
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}
module.exports.help = {
    name: 'sell_ore',
    aliases: ["sell_refinedmats"]
};