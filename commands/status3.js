module.exports.run = async (bot, message, args) => {
    if (message.guild.id !== '591603307416518676') return message.reply('This command can only be used in my support server!');
    if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply('Sorry, You Dont Have Permission To Change My Status Message')
        }
        bot.user.setPresence({ activity: { name: 'SI-help | Having New Code Added | BETA V0.5.30' }, status: 'dnd' });
message.channel.send("Status Changed to Config 3")
};
module.exports.help = {
    name: "status3",
    aliases: []
  };