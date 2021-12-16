const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
    if(args[0] === "araçlar") {
              let Genel = new Discord.MessageEmbed()
  .setTitle(':tools: Araçlar :tools:', message.author.displayAvatarURL())
  .setColor('#ff0000')
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => ":pushpin: `"+ prefix + cmd.help.name + "` " + cmd.help.description).join("\n"))
       return message.channel.send(Genel)
         
       
       return;
    }
    //AYARLAR KOMUTU
      if(args[0] === "ayarlar") {
              let Ayarlar = new Discord.MessageEmbed()
  .setTitle(':gear: Ayarlar :gear:', message.author.displayAvatarURL())
  .setColor('#ff0000')
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Ayarlar').map(cmd => ":pushpin: `"+ prefix + cmd.help.name + "` " + cmd.help.description).join("\n"))
       return message.channel.send(Ayarlar) 
        
        return;
      }
        
     //RESİM KOMUTU   
        if(args[0] === "resim") {
              let Resim = new Discord.MessageEmbed()
  .setTitle(':frame_photo: Resim/Meme :frame_photo:', message.author.displayAvatarURL())
  .setColor('#ff0000')
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Resim').map(cmd => ":pushpin: `"+ prefix + cmd.help.name + "` " + cmd.help.description).join("\n"))
       return message.channel.send(Resim)
         
      return;

      
    }
//EĞLENCE KOMUTU
  if(args[0] === "eğlence") {
   let Eğlence = new Discord.MessageEmbed()
  .setTitle(':tada: Eğlence Komutları :tada:')
  .setColor('#ff0000')
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => ":pushpin: `"+ prefix + cmd.help.name + "` " + cmd.help.description).join("\n"))
        return message.channel.send(Eğlence)
  
      
           
  }
  //MODERASYON KOMUTU
  if(args[0] === "mod" ) {
   let Moderasyon = new Discord.MessageEmbed()
  .setTitle(':gem: Moderasyon :gem:')
  .setColor('#ff0000')
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => ":pushpin: `"+ prefix + cmd.help.name + "` " + cmd.help.description).join("\n"))
       return message.channel.send(Moderasyon)
             
       
         
    
  }     
  
            
  
//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setTitle(':information_source: Yardım Menüsü :information_source:')
  .setThumbnail(client.user.avatarURL())
  .setColor('#ff0000')
  .addField('**:tools: Araçlar:** ', '**`' + ayarlar.prefix + 'yardım araçlar`**')
  .addField('**:tada: Eğlence:** ', '**`' + ayarlar.prefix + 'yardım eğlence`**')
  .addField('**:frame_photo: Resim/Meme:**', '**`' + ayarlar.prefix + 'yardım resim`**')
  .addField('**:gem: Moderasyon:** ', '**`' + ayarlar.prefix + 'yardım mod`**')
  .addField('**:gear: Ayarlar:** ', '**`' + ayarlar.prefix + 'yardım ayarlar`**')
  .setFooter("\nMeckZONE Discord sunucusuna özel olarak tasarlanmıştır.\n© 2021")
  message.channel.send(embed)

}
    

  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "Genel" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'yardım',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
    usage: 'yardım', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };
