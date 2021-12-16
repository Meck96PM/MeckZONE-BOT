const Discord = require('discord.js');

exports.run = (client, message) => {
      const random = Math.floor(Math.random() * 100) + 1
      message.channel.send(`:gear: **Siemens Efkârölçer**\n:white_small_square: Efkâr oranınız %`+ random)
   } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 kategori: 'Eğlence',
 permLevel: 0
}

exports.help = {
 name: 'efkarölçer',
 description: 'Efkârınızı ölçer.',
 usage: 'efkar Ölç'
};