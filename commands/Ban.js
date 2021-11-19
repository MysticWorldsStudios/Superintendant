module.exports.run = async (bot , message, args) => {
  
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
            let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
            if (!User) return message.channel.send("Invalid User")
            let banReason = args.join(" ").slice(22);
            if (!banReason) {
            banReason = "None"
            }
            User.ban({reason: banReason})
            const person = message.mentions.users.first()
			message.channel.send(person.username + " got banned by " + message.author.username)
        }

module.exports.help = {
  name: "ban",
  aliases: []
}