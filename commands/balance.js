const db = require('quick.db')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first() || message.author;
    let money = await db.fetch(`money_${user.id}`)
    if (money === null) money = 0;

    message.channel.send(`${user} you have ${money} C !`)
}
module.exports.help = {
    name: 'balance',
    aliases: ["bal"]
};