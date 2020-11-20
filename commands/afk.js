const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
    let reason = args.join(' ') ? args.join(' ') : 'That user is afk, they will be back soon, i hope :';

    db.set(`afk_${message.author.id}_${message.guild.id}`, reason)
      
      let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .setTitle("Your leaving? I hope not for long. You have successfully set your afk status as")
      .setDescription(reason)
      return message.channel.send(embed).then(msg => msg.delete(5000));
    }

module.exports.help = {
    name: 'afk',
    aliases: ["awayfromkeyboard"]
};