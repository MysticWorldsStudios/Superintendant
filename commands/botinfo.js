const osutils = require("os-utils");
const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

    let days = Math.floor(bot.uptime / 86400000);
    let hours = Math.floor(bot.uptime / 3600000) % 24;
    let minutes = Math.floor(bot.uptime / 60000) % 60;
    let seconds = Math.floor(bot.uptime / 1000) % 60;
    osutils.cpuUsage(function(v) {
    let offlinestats = new Discord.MessageEmbed()
    .setTitle("Owners Self Host Container Stats")
    .setColor("Random")
    .setDescription(`OS:`+ osutils.platform() +`\nCPU count:`+ osutils.cpuCount() +`\nCPU usage:`+ v +`\nLoad avg(5minutes):`+ osutils.loadavg(5) +`\nTotal mem:`+  osutils.totalmem() +`MB\nFree mem:`+ osutils.freemem() +`MB`)
    .addField(`__Uptime:__ ${days}d ${hours}h ${minutes}m ${seconds}s.`, `\n__Latancy:__ ${Date.now() - message.createdTimestamp}ms.\n__API Latancy:__${Math.round(bot.ws.ping)}ms\n__Users:__ `+ bot.users.cache.size +`\n__Servers:__ `+ bot.guilds.cache.size)
    .addField(`These stats are for the Container on my Owners PC!`, `The cpu usage shows the Bots usage not general usage sadly`)
    .setImage(`https://i.postimg.cc/9fnn4q5z/AGIS-Data-Centre.gif`)
        message.channel.send(offlinestats)
    });
};
module.exports.help = {
    name: "botinfo",
    aliases: ["bi"]
  };