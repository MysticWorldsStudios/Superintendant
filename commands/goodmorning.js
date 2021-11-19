module.exports.run = async (bot , message, args) => {
  
  if (message.guild.id !== '591603307416518676') return message.reply('This command can only be used in my support server!');
    if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply('You do not have permission to disable NightGuard')
        }
  bot.user.setPresence({ activity: { name: 'Disabling Nightguard | BETA V0.3.1' }, status: 'dnd' });
  message.channel.send("**NightGuard Override Recieved**").then(
    setTimeout(() => {
    message.channel.send("**Awareness Protocol AG-7 Disabling**")
    }, 3000)).then(
    setTimeout(() => {
    message.channel.send("**Deleting Server Tiers**")
    }, 6000)).then(
    setTimeout(() => {
    message.channel.send("**Complete!**")
    }, 10000)).then(
    setTimeout(() => {
    message.channel.send("**Sending all collected command usage to the Console with time logs**")
    }, 20000)).then(
    setTimeout(() => {
    message.channel.send("**Initiating Final Stage of shutdown**")
    }, 25000)).then(
    setTimeout(() => {
    message.channel.send("**NightGuard Systems: Offline**")
    }, 30000)).then(
      setTimeout(() => {
      message.channel.send("<a:AGISBadgeFlash:648087567761408001>")
      }, 31000)).then(
        setTimeout(() => {
        message.channel.send("Goodmorning Owner, I have Debriefed all events overnight to my console, Please feel free to read it!\nAlso set my status config!")
        }, 31100)).then(
          setTimeout(() => {
        bot.user.setPresence({ activity: { name: 'AG-help | Awaiting New Status Config Input | BETA V0.3.1' }, status: 'idle' });
      }, 31000))
}

module.exports.help = {
  name: "morning",
  aliases: ["nightguard_disable"]
}