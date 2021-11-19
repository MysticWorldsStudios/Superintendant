module.exports.run = async (bot, message, args) => {
    if (message.guild.id !== '591603307416518676') return message.reply('This command can only be used in my support server!');
    if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply('Sorry, You Dont Have Permission To Change My Status Message')
        }
bot.user.setActivity("Unstable Connection | BETA V0.5.30", {type: "PLAYING"});
bot.user.setPresence({ activity: { name: 'Connection Unstable | BETA V0.5.30' }, status: 'idle' });
message.channel.send("Status Changed to Config 2")
};
module.exports.help = {
    name: "status2",
    aliases: []
  };