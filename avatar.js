const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["a"],
  description: "Display your avatar",
  execute(message) {
    let commands = message.client.commands.array();
    
    let avatarEmbed = new MessageEmbed()
      .setTitle(message.author.displayAvatarURL())
      .setColor("#00dfff");

    return message.channel.send(message.author.displayAvatarURL());
  }
};
