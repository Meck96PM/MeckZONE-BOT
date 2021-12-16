const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
    if (!message.member.roles.cache.some(role => role.name === "Ban Çekici")) return message.channel.send(":no_entry: Yetkin yok!");
    if (!args[0]) {
        return message.channel.send(`kimi banlayayım peki seni mi`)
   }
   var sebeb = args.slice(1).join(" ");
   var seyfooo = args[0]
   var now = new Date()
   if (!sebeb) {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(seyfooo)) {
                   return message.channel.send(`bunu zaten banlamışsınız`)
               }
               message.guild.ban(seyfooo, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<@!${user.id}> adlı kullanıcıyı banladım.`);
                   })
                   .catch(error => {
                       message.channel.send("Bilinmeyen bir hata oluştu.\nHata:" + error + ".\nLütfen tekrar deneyin.");
                       console.error('Hata:', error);
                   });
           });
   } else {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(seyfooo)) {
                   return message.channel.send(`Bu Kullanıcı Zaten Yasaklanmış.`)
               }
               message.guild.ban(seyfooo, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<@!${user.id}> sunucudan yasaklandı `);
                   })
                   .catch(error => {
                       message.channel.send(` Bir Hata Oluştu`);
                       console.error(' Hata:', error);
                   });
           });
   }
 
}
exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [] ,
   permLevel: 0
 
};
 
exports.help = {
   name: 'id-ban',
   description: 'ID ile ban atarsınız.',
};