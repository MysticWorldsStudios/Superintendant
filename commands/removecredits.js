const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (bot, message, args, config) => {

if (message.guild.id !== '591603307416518676') return message.reply('This command can only be used in my support server!');
if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('You do not have control over the credit bank, sorry.')
    }
    let user = message.mentions.members.first() || message.author

    if (isNaN(args[0])) return message.channel.send(`${message.author}, you need to input a valid number to remove.`) // if args[0] (first input) is not a number, return.
    db.subtract(`money_${user.id}`, args[0]) // subtract it now
    let bal = await db.fetch(`money_${user.id}`)

    let embed = new Discord.MessageEmbed()
    .setAuthor(`Removed Money!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${args[0]}C`)
    .addField(`Balance Updated`, `${bal}C`)
    .setColor("Random") // random = "RANDOM"
    .setTimestamp()
    // you can change it to args[1] if you want to, but then it's not gonna work like I want it to.

    message.channel.send(embed)





}
module.exports.help = {
    name: 'remcred',
    aliases: ["rc"]
};