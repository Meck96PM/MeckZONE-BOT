const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (message.author.id !== ayarlar.sahip) return message.channel.send(`Capslock engel sistemi.`)
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Yetkin yok!`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`Capslock engel kapatıldı.!`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`:Capslock engel açıldı.`)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cse"],
  permLevel: 3
};
exports.help = {
  name: 'capslock-engelleme',
  description: 'Açıklama Bulamadım.',
  usage: 'capslock-engelleme'
};