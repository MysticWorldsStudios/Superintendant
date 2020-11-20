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
  bot.user.setActivity("SUPER-help | Shop Coming SOON!!! | Still in BETA!", {type: "PLAYING"});
   const API = new DanBotHosting.Client("danbot-372up", bot);
 
  // Start posting
  let initalPost = await API.autopost();
 
  if (initalPost) {
    console.error(initalPost); // console the error
  }
});

bot.on("message", async message => {
    
  let foundInText = false;
  if(message.content.includes(message.mentions.members.first()) || message.content.startsWith(message.mentions.members.first())) foundInText = true;
  if(foundInText){
  let mentioned = await db.fetch(`afk_${message.mentions.users.first().id}_${message.guild.id}`);
    let embed = new Discord.MessageEmbed()
        .setTitle(`${message.mentions.users.first().username} is currently AFK, i hope they return`)
        .setColor("RANDOM")
        .setDescription(`**Reason:** ${mentioned}`)
        .setThumbnail(message.mentions.users.first().avatarURL())
    if(mentioned) return message.channel.send(embed);
};
        
  let afkcheck = await db.fetch(`afk_${message.author.id}_${message.guild.id}`);     
    let embed2 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .setTitle(`Welcome back ${message.author.username}! We missed you very much!`)
      .setDescription("Now your back i'll remove you from the AFK list. <:SIHappy:647918769594957844>")
  if (afkcheck){ 
    db.delete(`afk_${message.author.id}_${message.guild.id}`, afkcheck)
    return message.channel.send(embed2);
  };
});

bot.on("message", async message => {
  
if(message.content.startsWith("<@609471037804904507>") || message.content.startsWith("<@!609471037804904507>")) return message.channel.send("OO a ping?\nIf you need to know my commands do SUPER-help");
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