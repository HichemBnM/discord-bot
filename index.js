const Discord = require("discord.js");
const { token, prefix } = require("./config.json");
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
});


const { readdirSync } = require("node:fs");
readdirSync("./handlers").forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});
module.exports.Client = client;


client.login(token);
client.on(Discord.Events.MessageCreate, (message) => {
  if (message.author.bot) return;

  if (message.content === prefix + "hi") {
    let Embed = new Discord.EmbedBuilder()
      .setAuthor({ name: "Tutorial Embed", iconURL: message.guild.iconURL() })
      .setTitle("Title")
      .setDescription(`Some description here`)
      .addFields(
        { name: "field1", value: "des of field", inline: true },
        { name: "field2", value: "des of field2", inline: true }
      )
      .setColor("Blue")
      .setThumbnail(message.guild.iconURL())
      .setImage(message.guild.iconURL())
      .setFooter({
        text: `${message.author.tag}`,
        iconURL: message.guild.iconURL(),
      })
      .setTimestamp();

    message.reply({ embeds: [Embed] });
  }
});

client.login(token);