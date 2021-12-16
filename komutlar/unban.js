const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.roles.cache.some(role => role.name === "Ban Çekici")) return message.channel.send(new MessageEmbed().setDescription(`:x: Yetkin yeterli değil!`))
    let user = args[0];
    const banList = await message.guild.fetchBans();
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new MessageEmbed().setDescription(`galiba hatalı ID giriyorsun`))
    }
    message.guild.members.unban(user);
    message.channel.send(new MessageEmbed().setDescription(`tamamdır`))
};

exports.conf = {
    aliases: ["un-ban"]
};

exports.help = {
    name: 'unban'
};