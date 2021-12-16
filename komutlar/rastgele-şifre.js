const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require('randomstring');

exports.run = (client, message, args) => {
              if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  var uzunluk = args.slice(0).join(' ');
if(!uzunluk.length > 30) return message.channel.send(new Discord.MessageEmbed().setTitle('Şifre Oluşturulamadı!').setDescription('MAX. 30 karakterli şifre oluşturabilirsiniz!')) 
    if (!uzunluk) return message.reply('Bir uzunluk belirt. **Doğru Kullanım**: şifre uzunluk')
     message.member.send(
            randomstring.generate({
            length: uzunluk,
            charset: 'alphabetic'
}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rastgeleşifre', 'rastgeleşifre', 'rastgeleşifre', 'rastgeleşifre'],
  permLevel: 0, 
  kategori: "Genel"
};

exports.help = {
  name: 'şifre',
  description: 'Belirttiğiniz uzunluğa göre size rastgele bir şifre önerir.\n:white_small_square: Örnek kullanım: `pm!şifre 9`',
};
