const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "n'ytt'' kaikki kommandit",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(`${message.client.user.username} Help`)
      .setDescription("kaikki kommandit")
      .setColor("#F8AA2A");
    
    let dmEmbed = new MessageEmbed()
      .setTitle("Kato sun yksityisviestit")
      .setColor("#00dfff");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.author.send(helpEmbed).catch(console.error), message.channel.send(dmEmbed)
  }
};
