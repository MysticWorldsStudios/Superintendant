module.exports.run = async (bot , message, args) => {
  
  message.channel.send("I kid you not").then(
      setTimeout(() => {
      message.channel.send("He turned himself into a Pickle");
      }, 3000)).then(
      setTimeout(() => {
      message.channel.send("He's called Pickle Rick");
      }, 6000)).then(
      setTimeout(() => {
      message.channel.send("ITS THE FUNNIEST SHIT IVE EVER SEEN!!!");
      }, 9000)).then(
      setTimeout(() => {
      message.channel.send("https://tenor.com/view/rick-and-morty-rick-and-morty-season3-adult-swim-rick-sanchez-pickle-rick-gif-9088343");
      }, 12000));
}

module.exports.help = {
  name: "pickle",
  aliases: []
}