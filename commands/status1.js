module.exports.run = async (bot, message, args) => {
    if (message.guild.id !== '591603307416518676') return message.reply('This command can only be used in my support server!');
    if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply('Sorry, You Dont Have Permission To Change My Status Message')
        }
bot.user.setPresence({ activity: { name: 'SI-help | Somethings happening to Solace, its changing | BETA V0.5.30' }, status: 'online' });
message.channel.send("Status Changed to Config 1")
};
module.exports.help = {
    name: "status1",
    aliases: []
  };