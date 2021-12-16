const Discord = require('discord.js');

exports.run = async (client, message, args) => {// can#0002

let username = 'You are';
if(message.mentions.members.first()) username = message.mentions.members.first().user.username+' is';
if(message.mentions.users.first()) username = message.mentions.users.first().username+' is';

let random = Math.floor(Math.random(100) * 100);
return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('gay r8 machine').setDescription(`Seni ${random}% gay olarak görüyorum!`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Eğlence"
};

exports.help = {
  name: 'howgay',
  description: "Ne kadar gay olduğunuzu merak ediyorsanız işte bu komut tam size göre!"
}