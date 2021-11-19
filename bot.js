require("dotenv").config();
const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
let client = new Discord.Client();
var DanBotHosting = require("danbot-hosting");
const fs = require("fs");
const db = require("quick.db");
const bot = new Discord.Client({ disableMentions: "everyone" });
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
  
  if(err) return console.log(err.message);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    return console.log("Couldn't find any commands.");
  }
  
  console.log(`Loading ${jsfile.length} commands...`);

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} file has been loaded into the bot successfully!`);
    bot.commands.set(props.help.name, props);
       props.help.aliases.forEach(alias => { 
        bot.aliases.set(alias, props.help.name);
    });
  });
});

bot.on("ready", async () => {
  console.log("Bot started as "+ bot.user.tag + "\n\nUsers: "+ bot.users.cache.size + "\nServers: " + bot.guilds.cache.size);
  bot.user.setPresence({ activity: { name: 'Bot Starting up | BETA V0.3.1' }, status: 'dnd' });
});

bot.on("message", async message => {
  
if(message.content.startsWith("<@609472610308325386>") || message.content.startsWith("<@!609472610308325386>")) return message.channel.send("Hello Citizen, Use AG-help to see my commands");
  });

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  
  var prefix = botconfig.prefix;
  if(!message.content.startsWith(prefix)) return;
  
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  let command;
  
  if(bot.commands.has(cmd)){
    command = bot.commands.get(cmd);
  } else {
    command = bot.commands.get(bot.aliases.get(cmd));
  }
  
  if(command) command.run(bot, message, args);
});

bot.login(process.env.TOKEN);