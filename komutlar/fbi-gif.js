const Discord = require("discord.js")


exports.run = async (client, message, args) => {
  
  const fbi = new Discord.MessageEmbed()
  .setColor("RED")
  .setImage("https://media1.giphy.com/media/QUY2pzDAKVpX3QacCg/200.gif")
  .setTitle("<a:alarm_kirmizi:773482690363916348> FBI OPEN UP! <a:alarm_kirmizi:773482690363916348>")
  message.channel.send(fbi)
}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['fbi-gif'],
  permLevel: `Yetki gerekmiyor.`,
  kategori: "Resim"
};

exports.help = {
  name: "fbi",
  description: "FBi GIF'i atar",
  usage:"!fbi"
}