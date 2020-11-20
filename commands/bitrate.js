const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
  
  const serverQueue = bot.queue.get(message.guild.id);
  
	    var value = args[0];
      if (!value) return message.channel.send('You must specify a value between 1-96');
	    if (!serverQueue) return message.channel.send('There is nothing playing.');
	    if (!message.member.voice.channel) return message.channel.send('You need to be in a voice channel to change the song\'s bitrate.');
	    if(serverQueue.voiceChannel !== message.member.voice.channel) return message.channel.send(`You must be in **${serverQueue.voiceChannel.name}** to change the song bitrate`);
	    if (value > 96) return message.channel.send("Don't go above the limits!")
      if (value < 0) return message.channel.send("Dont go below the limits!")
      if (!serverQueue.connection.dispatcher) return message.channel.send('Can\'t set bitrate before the song has started.');
      serverQueue.connection.dispatcher.setBitrate(value);
    return message.channel.send(`Bitrate has been set to **${value}kbps**!`) 
  }
  
module.exports.help = {
  name: "bitrate",
  aliases: []
}