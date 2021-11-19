module.exports.run = async (bot , message, args) => {
  
  if (message.guild.id !== '591603307416518676') return message.reply('This command can only be used in my support server!');
    if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.reply('You do not have permission to enable NightGuard')
        }
  bot.user.setPresence({ activity: { name: 'Starting Up NightGuard Mode | BETA V0.3.1' }, status: 'dnd' });
  message.channel.send("**NightGuard Command Recieved**").then(
    setTimeout(() => {
    message.channel.send("**Awareness Protocol AG-7 initiated**")
    }, 3000)).then(
    setTimeout(() => {
    message.channel.send("**Gathering All User Activity**")
    }, 6000)).then(
    setTimeout(() => {
    message.channel.send("**Putting More Active Servers on Highest Tier**")
    }, 10000)).then(
    setTimeout(() => {
    message.channel.send("**Inactive Servers placed to hourly checks**")
    }, 20000)).then(
    setTimeout(() => {
    message.channel.send("**Initiating Final Night Guard Preperations**")
    }, 25000)).then(
    setTimeout(() => {
    message.channel.send("**NightGuard Systems: Online**")
    }, 30000)).then(
      setTimeout(() => {
      message.channel.send("<:AGISNightguardON:648085250253258762>")
      }, 31000)).then(
        setTimeout(() => {
      bot.user.setPresence({ activity: { name: 'AG-help | NightGuard Mode: Online | BETA V0.3.1' }, status: 'online' });
    }, 31000))
}

module.exports.help = {
  name: "nightguard",
  aliases: ["ng"]
}