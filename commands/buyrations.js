const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let timeout = 60000
    let eat = await db.fetch(`eat_${message.author.id}`);

    if (eat !== null && timeout - (Date.now() - eat) > 0) {
        let time = ms(timeout - (Date.now() - eat));

        message.channel.send(`Your full after eating the last lot of rations\nMaybe try in **${time.seconds}s**.\n <:SIOhNo:751134715972681908>`)
    } else {
    let user = message.mentions.members.first() || message.author
	let sale = 1
    let rastart = await db.fetch(`rations_${message.author.id}`)

    if (rastart < 1) { // if the authors got less than 1 return this.
        return message.channel.send(':x: You need atleast 1 lot of Food Rations to eat!')
    }

    db.subtract(`rations_${message.author.id}`, sale)
             
  let ra = await db.fetch(`rations_${message.author.id}`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`You Ate Some Food`, message.author.displayAvatarURL)
	.setDescription(`You sat and ate a lovely warm meal, You feel much better\n\n`)
    .addField(`Amount`, `${sale} food rations\nYou now have ${ra} food rations`)
    .setColor("random") // random = "RANDOM"
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
    db.set(`eat_${message.author.id}`, Date.now())
	}
}

module.exports.help = {
    name: 'eat_rations',
    aliases: ["eat_food"]
};
