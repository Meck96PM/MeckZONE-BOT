const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  message.delete()
const embed = new Discord.MessageEmbed()
.setTitle('**GENEL ROLLER**')
.setDescription('<@&797438946530557972> Sunucunun kurucusuna verilen özel roldür. \n <@&802686727004880916> <@858678479901818910> Botunu kodlayanlara verilir. \n <@&841101647547858975> Ekonomi sistemini hazırlayan kişilere verilir.')
message.channel.send(embed)
}
module.exports.conf = {
  aliases: [],
  permLevel: 0,
  kategori: "",
};

module.exports.help = {
  name: 'rolbilgi',
  description: '.',
  usage: '',
 
};