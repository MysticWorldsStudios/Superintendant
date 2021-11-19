const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

exports.run = async (bot, message, args, config) => {
    let timeout = 3600000
	let wt = await db.fetch(`wt_${message.author.id}`);
	if (wt !== null && timeout - (Date.now() - wt) > 0) {
        let time = ms(timeout - (Date.now() - wt));

        message.channel.send(`Your tired from your last job\nCome back in **${time.hours}h ${time.minutes}m ${time.seconds}s**.`)
    } else {
    
    if (args[0] == 'hovbus') {

        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a Hovbus driver & got payed ${amount}C for the trip!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
		db.set(`wt_${message.author.id}`, Date.now())
    } else if(args[0] == 'constructor') {
        let amount = Math.floor(Math.random() * 1000) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a constructor & got payed ${amount}C for guiding constructor bots to build a new city sector`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
        db.set(`wt_${message.author.id}`, Date.now())
    } else if(args[0] == 'programmer') {
        let amount = Math.floor(Math.random() * 2000) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a programmer for EPPPD and you fixed a bug in their enforcer system code, you have been given ${amount}C!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
        db.set(`wt_${message.author.id}`, Date.now())
  	  }
	}
}
module.exports.help = {
    name: 'work',
    aliases: ["job"]
};