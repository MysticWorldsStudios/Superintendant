const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

exports.run = async (bot, message, args, config) => {

    let author = await db.fetch(`miningship_${message.author.id}`) // fetch authors balance

    if (author < 1) { // if the authors balance is less than 1000, return this.
        return message.channel.send(':x: You need a mining ship to mine anything')
    } else{
	let timeout = 20000
	let wt = await db.fetch(`mlcd_${message.author.id}`);
	if (wt !== null && timeout - (Date.now() - wt) > 0) {
        let time = ms(timeout - (Date.now() - wt));
        
 		let embed2 = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, Your Mining Laser has heated up\nLet it cool down first or it will Overheat\nYou can Fire again in **${time.seconds}s**.`)
        .setImage(`https://i.postimg.cc/85sF7qZc/Mining-Overheat-image.png`)
        .setColor("RANDOM")
        message.channel.send(embed2)
    } else {
		let amount = Math.floor(Math.random() * 15) + 1; // 1-500 random number. whatever you'd like
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You went mining on Masser and excavated ${amount}T of Ore`)
        .setImage(`https://i.postimg.cc/sgtHHrhd/Mining-image.png`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`ore_${message.author.id}`, amount)
		db.set(`mlcd_${message.author.id}`, Date.now())
    	}
	}
}
module.exports.help = {
    name: 'mine',
    aliases: ["excavate"]
};