const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let owner = message.author;
  
  if(!args.length) return message.channel.send(`Must provide a command to reload!      *gun click sounds*      damn, still no ammo.`)

  let command;
  if (bot.commands.has(args[0])) {
    command = bot.commands.get(args[0]);
  }
  if(!command) return message.channel.send(`The command \`${args[0]}\` doesn't seem to exist.     did you mean 0÷0?               **oh god no i ended existance!      again....**`);

  if(command.db) await command.db.close();

  command = command.help.name;

  delete require.cache[require.resolve(`./${command}.js`)];
  let cmd = require(`./${command}.js`);
  bot.commands.delete(command);
  if(cmd.init) cmd.init(bot);
  bot.commands.set(command, cmd);

  message.channel.send(`The command gun has reloaded the command, \`${command}\`           * **gun reload sound** *     the command is reloaded now and ready to fire!`);
};

module.exports.help = {
    name: "reload",
  aliases: ["reloadcmdgun"]
  }