const Discord = require("discord.js")
const db = require('quick.db')
const ms = require('parse-ms');

module.exports.run = async (bot, message, args) => {
const axios = require('axios');
      let days = Math.floor(bot.uptime / 86400000);
      let hours = Math.floor(bot.uptime / 3600000) % 24;
      let minutes = Math.floor(bot.uptime / 60000) % 60;
      let seconds = Math.floor(bot.uptime / 1000) % 60;

    axios({
        url: "https://danbot.host/nodeStatus",
        method: 'GET',
        followRedirect: true,
        maxRedirects: 5,
    }).then(response => {
		 let botinfo = new Discord.MessageEmbed()
        .setTitle("Bot Statistics")
        .setColor("Random")
        .setDescription(`__Uptime:__ ${days}d ${hours}h ${minutes}m ${seconds}s.\n__Latancy:__ ${Date.now() - message.createdTimestamp}ms.\n__API Latancy:__${Math.round(bot.ws.ping)}ms \n__Users:__ `+ bot.users.cache.size +`\n__Servers:__ `+ bot.guilds.cache.size)
		.addField(`Bot Nodes`, `\n__My Node:__`+ response.data.nodestatus.Node2 +`\n__AGIS's Node:__`+ response.data.nodestatus.Node1)
	
		message.channel.send(botinfo)
    });
}
module.exports.help = {
  name: "botinfo",
  aliases: ["bi"]
};