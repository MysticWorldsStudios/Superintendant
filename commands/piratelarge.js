const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

exports.run = async (bot, message, args, config) => {

    let capitalhvy = await db.fetch(`cptl_${message.author.id}`) // fetch authors balance

    if (capitalhvy < 1) { // if the authors balance is less than 1000, return this.
        return message.channel.send(':x: You need a Capital Ship to take on a Large Fleet')
    } else{
	let timeout = 3600000
	let cb = await db.fetch(`cbl_${message.author.id}`);
	if (cb !== null && timeout - (Date.now() - cb) > 0) {
        let time = ms(timeout - (Date.now() - cb));
        
 		let embed2 = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, Your Fleets Damaged from the last battle\nIt will Be Repaired in\n**${time.hours}h ${time.minutes}m ${time.seconds}s**.`)
        .setColor("RANDOM")
        message.channel.send(embed2)
    } else {
		let amount = Math.floor(Math.random() * 150000) + 100000; // 1-500 random number. whatever you'd like
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You Attacked a Large Pirate Fleet and got ${amount}C from the Bounty Vouchers`)
        .setImage(`https://i.postimg.cc/MG28bsjK/Space-Battle.gif`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
		db.set(`cb_${message.author.id}`, Date.now())
    	}
	}
}
module.exports.help = {
    name: 'bh_large',
    aliases: ["bountyhunt_large"]
};