const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
    let amount = 500
    
    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`You already generated your free credits\nCome back in**${time.hours}h ${time.minutes}m ${time.seconds}s**!\n <:SIOhNo:751134715972681908>`)
    } else {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Daily`, message.author.displayAvatarURL())
        .setColor("Random")
        .setDescription(`**Daily Reward**`)
        .addField(`Collected`, amount)

        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
        db.set(`daily_${message.author.id}`, Date.now())
    }
}
    
module.exports.help = {
    name: 'daily',
    aliases: ["d"]
};