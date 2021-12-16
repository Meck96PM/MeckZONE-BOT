const discord = require('discord.js')

exports.run = async (client, message, args) => {

  const embed = new discord.MessageEmbed()
.setTitle('<a:Dikkat_2:811332127483625483> Hata <a:Dikkat_2:811332127483625483>')
  .setColor("#FF1515")
.setDescription(`Bu botu sunucunuza getiremezsiniz. Daha fazla bilgi ve ayrıntı için lütfen [burayı](https://discord.com/channels/676484465358274600/797439128568201286/859036102207995924) okuyun.`)
return message.channel.send(embed)
}

exports.conf = {
  aliases: [],
  permLevel: 0,
  kategori: "Genel",
};

exports.help = {
  name: 'davet',
  description: 'Botu bu komutla sunucunuza getirebilirsiniz.',
  usage: '',
 
};