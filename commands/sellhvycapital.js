const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || message.author
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance
    let freighter = await db.fetch(`hvycptl_${message.author.id}`)

    if (freighter < 1) { // if the authors got less than 1 return this.
        return message.channel.send(':x: You need to own a Heavy Assault Capital Ship to sell it!')
    }

    db.subtract(`hvycptl_${message.author.id}`, freighter)
    db.add(`money_${user.id}`, freighter * 150000)
         
    
  let bal = await db.fetch(`money_${user.id}`)
  let minr = await db.fetch(`hvycptl_${message.author.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Successfully Sold Heavy Assault Capital Ships!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${freighter} Capital Ships\nYou now have ${minr} Capital Ships`)
    .addField(`Balance Updated`, `${bal}C`)
    .setColor("Green") // random = "RANDOM"
    .setImage(`https://i.postimg.cc/XvnRVWsM/hvy-capital-buy.png`)
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}
module.exports.help = {
    name: 'sell_hacptl',
    aliases: ["sell_heavyassaultcapitalship"]
};