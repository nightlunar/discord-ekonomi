const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("plasmic.json");
const bt = require('best-tools');
exports.run = async(client, message, args) => {
  db.add(`bankakapasite_${message.author.id}`, 30)
  let miktarsonuç = (bt.rastgele("500", "pozitif"))
    var sebep = ["Enes Baturu aradı","Enginarı aradı","Orkun Işıtmak'ı aradı","Berkoni' yi aradı", "kimseyi aramadı","Plasmic ekibini aradı","zengin birini aradı","kimi arayacağını düşündü","çöpü aradı"]
    var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
    db.add(`para_${message.author.id}`, miktarsonuç)
    const embed = new discord.MessageEmbed()
    .setDescription(`${message.author.username} ${sebepsonuç} ve ${miktarsonuç}  :coin:  kazandı!`)
    return message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ara' 
  }