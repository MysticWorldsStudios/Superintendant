const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  const serverQueue = bot.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`<a:JukeboxPlaying:647923782429704212> Now playing: **${serverQueue.songs[0].title}**`);
  }
  
module.exports.help = {
    name: 'np',
    aliases: []
};