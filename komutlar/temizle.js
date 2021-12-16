const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {

  

  if (!message.member.roles.cache.some(role => role.name === "Temizleme Yetkisi")) return message.reply(`yetkin yokki aq`);

  

if(isNaN(args[0])) {

  var errembed = new Discord.MessageEmbed()

    .setColor("FF5900")

    .addField("⚠️ Hata", "Komut şu şekilde kullanılmalıdır: `" + ayarlar.prefix + "sil <1-100>`")

    return message.channel.send(errembed);

}

  

if (args[0] < 1) return message.reply("0 tane mesajı mı sileyim? Dalga mı geçiyorsun sen!?")

if (args[0] > 100) return message.reply("Üzgünüm ama tek seferde 100'den fazla mesajı temizleyemem.")

  

message.channel.bulkDelete(args[0]).then(deletedMessages => {

if (deletedMessages.size < 1) return message.reply("14 günden eski mesajları silemediğim için işlem başarısız oldu");

})

message.channel.send(`**${args[0]}** adet mesaj başarıyla silindi!`)

};

exports.conf = {

  enabled: true, 

  guildOnly: false, 

  aliases: ["sil", "mesaj-sil", "mesajları-sil"],
  
  kategori: "Moderasyon",

  permLevel: `Mesajları yönet yetkisine sahip olmak gerekir.`

};

exports.help = {

  name: 'sil',
  
  description: "Belirtilen miktarda mesaj siler. __**Örnek Kullanım:**__ `" + ayarlar.prefix + "sil <sayı>`",

  usage: '.sil <miktar>'

}