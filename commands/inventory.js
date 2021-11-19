const db = require('quick.db')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first() || message.author;
    let nw = await db.fetch(`nightwing_${user.id}`)
    let vessel = await db.fetch(`miningship_${user.id}`)
	let ore = await db.fetch(`ore_${user.id}`)
	let rations = await db.fetch(`rations_${user.id}`)
	let ref = await db.fetch(`refinedore_${user.id}`)
    let freighter = await db.fetch(`freighter_${user.id}`)
    let hvyfreighter = await db.fetch(`hvyfreighter_${user.id}`)
    let cptl = await db.fetch(`cptl_${user.id}`)
    let hvycptl = await db.fetch(`hvycptl_${user.id}`)
    if (nw === null) nw = 0;
    if (vessel === null) vessel = 0;
    if (ore === null) ore = 0;
    if (rations === null) rations = 0;
    if (ref === null) ref = 0;
	if (freighter === null) freighter = 0;
	if (hvyfreighter === null) hvyfreighter = 0;
	if (cptl === null) cptl = 0;
	if (hvycptl === null) hvycptl = 0;

    let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}s Inventory`) 
        .setDescription(`${nw} Nightwings\n\n${rations} Rations of Food\n\n${ore}T of Ore in your Ships Cargo\n\n${ref}T of Refined Material in your Ships Cargo\n\n${vessel} Mining Ship docked at the Starport\n\n${freighter} Combat Freighters in the Shipyards\n\n${hvyfreighter} Heavy Assault Combat Freighters in the Shipyards\n\n${cptl} Capital Ships in the Shipyards\n\n${hvycptl} Heavy Assault Capital Ships in the Shipyards\n\n`)
        .setImage(`https://i.postimg.cc/50KGb1HL/Mining-ship-clone-1.png`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
}
module.exports.help = {
    name: 'inventory',
    aliases: ["inv"]
};