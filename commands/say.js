module.exports.run = async (bot, message, args) => {
  
  message.delete();
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
  
  let channel = message.mentions.channels.first();
  if(!channel) return message.channel.send('You didn\'t specify a channel.');
  let text = args.join(' ').slice(args[0].length + 1);
  if(!text) return message.channel.send('I don\'t know what to say.'); 
  
  return channel.send(text);
}

module.exports.help = {
  name: 'say',
  aliases: ['tell', 'speak']
} 