const Discord = require("discord.js");

exports.run = async (client, message, args) => {//enginar
  
  let embed = new Discord.MessageEmbed()
  .addField(':rocket: __``Sunucuya Boost Basmak``__ :rocket:',`
  \n:information_source: Sunucumuza boost basarak ekstra avantajlara sahip olabilirsiniz! İşte o avantajlar;**
  \n <:_sagok:779275006659657738> Hesabınıza ekstradan maaş bağlanır.
  \n <:_sagok:779275006659657738> Adınız burada yani Booster Anıtı'nda gözükür!
  \n <:_sagok:779275006659657738> Üyelerin üstündeki <@&810124531632177203> rolünü alırsınız.
  \n <:_sagok:779275006659657738> 
  \n <:_sagok:779275006659657738> 
  \n <:_sagok:779275006659657738> `)
  .setColor("RANDOM")
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();
  
  message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "boost-avantajları",
  description: "",
  usage: ""
};