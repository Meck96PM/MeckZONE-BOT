const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        let kullanıcı = message.mentions.members.first();

        if(kullanıcı){
            const $adista = new Discord.MessageEmbed()
            .setDescription(`${kullanıcı}'nın profil resmi`)
            .setColor('#36393F')
            .setImage(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send($adista)
        } else {
            const $adista = new Discord.MessageEmbed()
            .setDescription(`${message.author} profil resminiz`)
            .setColor('#36393F')
            .setImage(message.author.avatarURL({dynamic: true, size: 2048}))
            message.channel.send($adista)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Avatar','AVATAR','pp','Pp','PP','İCON','icon','İcon','aVATAR','avatra','Avatra','AVATRA','avtra','AVTRA','Avtra'],
    kategori: 'Resim',
    permLevel: 0
}

exports.help = {
    name: 'avatar',
    description: 'Belirttiğiniz kişinin profil resmini gösterir.'
}