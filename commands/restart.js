module.exports.run = async (bot , message, args) => {
  
    if (message.guild.id !== '591603307416518676') return message.reply('This command can only be used in my support server!');
    if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply('You do not have permission sorry')
        }

   if (message.member.hasPermission('ADMINISTRATOR')) {
     return message.channel.send('Restarting...').then(m => {
      bot.destroy().then(m => {
        bot.login(process.env.TOKEN);
      });
    });
  }
}
  module.exports.help = {
    name: "restart",
    aliases: []
  }