const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const db = require('quick.db')
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var prefix = ayarlar.prefix;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message =>{
const sa = message.content.toLowerCase()

if(sa === 'sa' || sa === 'sea' || sa === 's.a' || sa === 'sea' || sa === 'slm' || sa === 'selamun aleyküm' || sa === 's a') {
if(message.author.id === '851175483987197983') return message.channel.send(new Discord.MessageEmbed().setDescription(`Aleyküm Selam, Yapımcım Geldi <a:_galp:810766905740492880>`))
  if(message.author.id === '648227670810951722') return message.channel.send(new Discord.MessageEmbed().setDescription(`Aleyküm Selam, Yapımcım Geldi <a:_galp:810766905740492880>`))
  message.channel.send(`as hg <@!${message.author.id}>`)
}
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message =>{
const bb = message.content.toLowerCase()

if(bb === 'bb') {
message.channel.send(`bb knk`)
}
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('guildMemberAdd', async member => {// chimp ᵈ♡#0110
const data = require('quick.db')
const asd = data.fetch(`${member.guild.id}.jail.${member.id}`)
if(asd) {
let data2 = await data.fetch(`jailrol_${member.guild.id}`)
let rol = member.guild.roles.get(data2)
if(!rol) return;
let kişi = member.guild.members.get(member.id)
kişi.addRole(rol.id);
kişi.roles.forEach(r => {
kişi.removeRole(r.id)
data.set(`${member.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    data.set(`${member.guild.id}.jail.${kişi.id}`, 'codare')
  const wasted = new Discord.RichEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setColor(`#f3c7e1`)
  .setDescription(`Aa, beni kandıramazsın!`)
  .setTimestamp()
    member.send(wasted)
}
   
  
  
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('guildMemberAdd', member => {
  let virus = client.channels.cache.get('797439124135084042')
  if(!virus) return
  let kullanıcı = client.users.cache.get(member.id)
  const kurulus = new Date().getTime()- kullanıcı.createdAt.getTime();
  let plasmic;
  if (kurulus < 1296000000) kullanıcı.roles.add('859814350754676757') 
  if (kurulus > 1296000000) plasmic = 'Güvenilir!'
  virus.send(member + " adlı kullanıcı aramıza katıldı.\n**Hesabın Güvenirlik Durumu**: *" + plasmic + "*")
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", msg => {
let db = require('quick.db')
 let e = db.fetch(`reklamengel_${msg.guild.id}`)
if(e === "aktif"){  
      const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                         const batusuyar = new Discord.MessageEmbed()
.setColor('RED')
.setTitle("Reklam Engel Filtresi")
.setDescription(`Sunucuda Reklam Engel Filtresi Açık Reklam Yapamazsın <@${msg.author.id}>`)
                         
    
                    return msg.channel.send(batusuyar).then(msg => msg.delete(3000));
   
 
  msg.delete(3000);                              
 const log = new Discord.MessageEmbed()
   .setTitle('Birisi reklam yaptı!')
   .setDescription(`Reklam yapan: ${msg.author} \n Link: ${reklam}`)
   client.channels.cache.get('799403089772937236').send(log)
            }              
          } catch(err) {
            console.log(err);
          }
        }}
else return;
    });
client.on('message', async message => {
if (message.content === '.fakekatıl') { // . yerine prefixi yaz
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});
///////////////////////////
client.on("guildBanAdd", async (guild, user) => {
  
  guild.fetchAuditLogs().then(logs => { 
    let banlayan = logs.entries.first().executor;
    if(banlayan.id === client.user.id) return
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`Eylem: Elle Ban`)
  .setDescription(`
**Banlayan: ${banlayan}**

**Banlanan İsmi ve ID'si: ${user.tag} ve ${user.id}**
  `)
  client.channels.cache.get('799400796399730741').send(embed)
  });
});

  ///////////////////////////

  client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(process.env.token);

client.on('ready', () => {

client.channels.cache.get('907342606642589756').join();
})