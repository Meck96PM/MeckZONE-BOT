const Discord = require('discord.js');
const db = require("quick.db");
 
exports.run = async(client, message, args) => {
  if (!args[0]) return message.channel.send(`Bir seçenek belirt! aç/kapat`)
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(' Bu komutu kullanmak için **YONETICI** yetkisine sahip olmalısın!')
 
  if (args[0] === 'aç') {
    
    db.set(`reklamengel_${message.guild.id}`, 'aktif')
    message.channel.send(`Reklam engel başarıyla aktif!`)
 
  }

  
  if (args[0] === 'kapat') {
    
    db.set(`reklamengel_${message.guild.id}`, 'deaktif')
    message.channel.send(`Reklam engel başarı ile kapatıldı!`)

  }

}
module.exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 0,
  kategori: 'Ayarlar'
};
 
module.exports.help = {
  name: 'reklam-engel',
  description: 'Bu filtre, sunucudaki metin kanallarına link atıldığında otomatik olarak siler.'
};