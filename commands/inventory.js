const db = require('quick.db')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first() || message.author;
    let nw = await db.fetch(`nightwing_${user.id}`)
    if (nw === null) nw = 0;

    message.channel.send(`${user} you have ${nw} NightWings !`)
}
module.exports.help = {
    name: 'inventory',
    aliases: ["inv"]
};