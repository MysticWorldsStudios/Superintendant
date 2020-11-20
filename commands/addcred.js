const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (bot, message, args, config) => {

if (message.guild.id !== '591603307416518676') return message.reply('This command can only be used in my support server!');
if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('You do not have control over the credit bank, sorry.')
    }

    let user = message.mentions.members.first() || message.author

    if (isNaN(args[0])) return message.channel.send(`${message.author}, you need to input a valid number to add.`) // if args[0] (first input) is not a number, return.
    db.add(`money_${user.id}`, args[0])
    let bal = await db.fetch(`money_${user.id}`)

    let embed = new Discord.MessageEmbed()
    .setAuthor(`Added Credits!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${args[0]}C`)
    .addField(`Balance Updated`, `${bal}C`)
    .setColor("Random") // random = "RANDOM"
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}
module.exports.help = {
    name: 'addcred',
    aliases: ["ac"]
};