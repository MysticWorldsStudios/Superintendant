module.exports.run = async (bot , message, args) => {
  
  message.channel.send("Welcome to the server new member!\nIm **AGIS** it stands for **Automated General Intergrated Security**\nI secure this server and a handful of others!\nI also have a brother bot, **Superintendant**, *I'm sure he already welcomed you though!*")
}

module.exports.help = {
  name: "welcome",
  aliases: ["greet"]
}