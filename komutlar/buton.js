const { MessageButton } = require('discord-buttons');
exports.run = async(client, message, args) => {
  let button2 = new MessageButton()
    .setStyle('url')
    .setLabel('blm')
    .setURL('https://google.com')
  
  return message.channel.send('Deneme', {
    buttons: [
     button2
    ]
  });
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel:0,
    aliases: [],
  kategori: "Sahip"
    }
    exports.help = {
    name: "discord-buttons"
    }