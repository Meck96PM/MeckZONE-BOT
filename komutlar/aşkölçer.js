const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 
exports.run = async (client, msg, args) => {
    let ask=[
      "Aşkölçer %3 Gösteriyor.",
      "Aşkölçer %6 Gösteriyor.",
      "Aşkölçer %9 Gösteriyor.",
      "Aşkölçer %12 Gösteriyor.",
      "Aşkölçer %18 Gösteriyor.",
      "Aşkölçer %20 Gösteriyor.",
      "Aşkölçer %23 Gösteriyor.",
      "Aşkölçer %26 Gösteriyor.",
      "Aşkölçer %29 Gösteriyor.",
      "Aşkölçer %30 Gösteriyor.",
      "Aşkölçer %40 Gösteriyor.",
      "Aşkölçer %50 Gösteriyor.",
      "Aşkölçer %60 Gösteriyor.",
      "Aşkölçer %70 Gösteriyor.",
      "Aşkölçer %73 Gösteriyor.",
      "Aşkölçer %76 Gösteriyor.",
      "Aşkölçer %79 Gösteriyor.",
      "Aşkölçer %82 Gösteriyor.",
      "Aşkölçer %85 Gösteriyor.",
      "Aşkölçer %88 Gösteriyor.",
      "Aşkölçer %90 Gösteriyor.",
      "Aşkölçer %91 Gösteriyor.",
      "Aşkölçer %92 Gösteriyor.",
      "Aşkölçer %93 Gösteriyor.",
      "Aşkölçer %94 Gösteriyor.",
      "Aşkölçer %95 Gösteriyor.",
      "Aşkölçer %96 Gösteriyor.",
      "Aşkölçer %97 Gösteriyor.",
      "Aşkölçer %98 Gösteriyor.",
      "Aşkölçer %99 Gösteriyor.",
      "Aşkölçer %100 Gösteriyor.",
    ]
      let member = args.slice(0).join(" ");
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('kimi sevdiğini belirtmedin ki aq ne yapmamı bekliyon beynini okumamı mı')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${msg.author} ❤️ ${member}\n\n${ask[Math.floor(Math.random() * 30)]}`),
      title: (`Philips Aşkölçer`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    kategori: 'Eğlence', 
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Sevdiğiniz kişiyle aranızda olan aşkı ölçersiniz.\n:white_small_square: `' + ayarlar.prefix + 'aşkölçer Aslı` ya da `' + ayarlar.prefix + 'aşkölçer <@kullanıcı#0001>` şeklinde kullanabilirsiniz.',
    usage: 'aşkölçer'
   }