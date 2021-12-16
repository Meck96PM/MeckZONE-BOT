const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' al buyur tokenim: BOHOHOHOHOHOHOHOHOHYT')
    .setColor("RANDOM")
    .setTimestamp()
        .setImage(`https://www.muratkim.com/wp-content/uploads/2019/04/ek%C5%9Fi-s%C3%B6zl%C3%BCk-yazar%C4%B1y%C4%B1m-buradakiler-beni-ele%C5%9Ftiremez_836814.gif`)
    return message.channel.send(embed);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Eğlence"
};
exports.help = {
  name: 'token',
  description: 'Tokenimi öğrenmeyi sen de istemez misin? :D',
};