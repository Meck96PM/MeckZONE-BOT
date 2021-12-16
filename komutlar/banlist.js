const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  var s = message.guild.fetchBans().then(bans => {
    const embed = new Discord.MessageEmbed()
    .setTitle('**Sunucudan banlananlar**')
    .setDescription(`**${bans.size}** banlı üye var`)
  message.channel.send(embed)
  })
 };

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1,
  kategori: "Moderasyon"
};
exports.help = {
  name: "banlist",
  description: "Sunucuda kaç kişi banlı gösterir.",
  usage: "banlar"
};