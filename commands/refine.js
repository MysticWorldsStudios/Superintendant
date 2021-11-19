const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || message.author
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance
    let store = await db.fetch(`ore_${message.author.id}`)

    if (store < 1) { // if the authors got less than 1 return this.
        return message.channel.send(':x: You need atleast 1T of Ore to Refine it!')
    }

    db.add(`refinedore_${user.id}`, store)
    db.subtract(`ore_${message.author.id}`, store)
         
    
  let ref = await db.fetch(`refinedore_${user.id}`)
  let ore = await db.fetch(`ore_${message.author.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Ore Has been sent to the Refinery`, message.author.displayAvatarURL)
    .addField(`The Refinery has Given you`, `${store}T of Refined Material \nYou now have ${ref}T of Refined Material and ${ore}T of Ore`)
    .addField(`Use The Command`, `SI-sell_ore\nTo sell the Refined Materials`)
    .setColor("Green") // random = "RANDOM"
	.setImage(`https://i.postimg.cc/qq2psbY5/Halo-ship-sprites-7-png.png`)
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}
module.exports.help = {
    name: 'refine',
    aliases: ["melt_ore"]
};