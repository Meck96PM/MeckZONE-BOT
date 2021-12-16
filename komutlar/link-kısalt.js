const Discord = require('discord.js');
const shorten = require('isgd');

exports.run = (client, message, args, tools) => {
 if (!message.guild) {
  return }    
message.delete();
    if (!args[0]) return message.channel.send('')

    if(!args[1]) {

        shorten.shorten(args[0], function(res) {
            if (res.startsWith('Hata:')) message.channel.send('**Lütfen Doğru URL Girin.**');

           message.channel.send(new Discord.MessageEmbed().setTitle('Link Kısaltıldı!').setDescription(`**<${res}>**`));
        })
    } else {
        shorten.custom(args[0], args[1], function(res) {

            if (res.startsWith('Hata:')) message.channel.send(`**<${res}>**`);

            message.channel.send(`**<${res}>**`);
        })
    }

};


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["linkkısalt"],
 permLevel: 0,
  kategori: "Genel"
};

exports.help = {
 name: 'link-kısalt',
 description: "İstediğiniz bir URL'yi `is.gd` kullanarak kısaltır.",
 usage: 'kısalt'
};