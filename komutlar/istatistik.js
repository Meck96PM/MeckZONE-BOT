const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("© 2021 MeckZONE", client.user.avatarURL())
    .addField("**Botun Sahibi**", "<@648227670810951722>")
    .addField("**Gecikme süreleri** :ping_pong:","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("**RAM kullanımı** :nut_and_bolt:",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("**Uptime süresi** :timer:", seksizaman, true)
    .addField("**Kullanıcı sayısı** 👥",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("**Sunucu sayısı** :globe_with_meridians:", client.guilds.cache.size.toLocaleString(), true)
    .addField("**Kanal sayısı** :speech_balloon:", client.channels.cache.size.toLocaleString(), true)
    .addField("**Discord.JS sürümü** :computer:", "v" + Discord.version, true)
    .addField("**Node.JS sürümü** :desktop:", `${process.version}`, true)
    .addField("**Seslide bulunulan sunucu sayısı** :sound:", client.voice.connections.size, true)
    .addField("**İşlemci modeli** :gear:",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("**Bit** :satellite:", `\`${os.arch()}\``, true)
    .addField("**İşletim sistemi** :dvd:", `\`\`${os.platform()}\`\``, true)
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};