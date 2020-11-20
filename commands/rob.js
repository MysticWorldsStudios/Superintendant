const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args, config) => {

	let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
	let robbery = await db.fetch(`robbery_${message.author.id}`);

    if (robbery !== null && timeout - (Date.now() - robbery) > 0) {
        let time = ms(timeout - (Date.now() - robbery));

        message.channel.send(`You have robbed someone once today\ntry again in**${time.hours}h ${time.minutes}m ${time.seconds}s**!\nOr AGIS will find out\nYour just lucky i dont rat you out now!\n <:SIUnamused:647919332529012757>`)
  } else {
    let user = message.mentions.members.first()
    let targetuser = await db.fetch(`money_${user.id}`) // fetch mentioned users balance
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance


    if (author < 1000) { // if the authors balance is less than 1000, return this.
        return message.channel.send(':x: You need atleast 1000$ to rob somebody.')
    }

    if (targetuser < 0) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`:x: ${user.user.username} does not have anything to rob.`)
    }


    let random = Math.floor(Math.random() * 200) + 1; // random number 200-1, you can change 200 to whatever you'd like


    let embed = new Discord.MessageEmbed()
	.setAuthor(`Robbery`, message.author.displayAvatarURL())
    .setDescription(`${message.author} you robbed ${user} and got away with ${random}!`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)


    db.subtract(`money_${user.id}`, random)
    db.add(`money_${message.author.id}`, random)
	db.set(`robbery_${message.author.id}`, Date.now())
	} 
}
module.exports.help = {
    name: 'rob',
    aliases: ["robuser"]
};