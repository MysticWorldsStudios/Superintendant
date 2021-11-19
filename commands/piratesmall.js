const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

exports.run = async (bot, message, args, config) => {

    let capitalhvy = await db.fetch(`freighter_${message.author.id}`) // fetch authors balance

    if (capitalhvy < 5) { // if the authors balance is less than 1000, return this.
        return message.channel.send(':x: Your fleet is too small to take on a small fleet, Buy 5 Freighters to be able to fight!')
    } else{
	let timeout = 900000
	let cb = await db.fetch(`cbs_${message.author.id}`);
	if (cb !== null && timeout - (Date.now() - cb) > 0) {
        let time = ms(timeout - (Date.now() - cb));
        
 		let embed2 = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, Your Fleets Damaged from the last battle\nIt will Be Repaired in\n**${time.hours}h ${time.minutes}m ${time.seconds}s**.`)
        .setColor("RANDOM")
        message.channel.send(embed2)
    } else {
		let amount = Math.floor(Math.random() * 50000) + 25000; // 1-500 random number. whatever you'd like
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You Attacked a Small Pirate Fleet and got ${amount}C from the Bounty Vouchers`)
        .setImage(`https://i.postimg.cc/MG28bsjK/Space-Battle.gif`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
		db.set(`cb_${message.author.id}`, Date.now())
    	}
	}
}
module.exports.help = {
    name: 'bh_small',
    aliases: ["bountyhunt_small"]
};