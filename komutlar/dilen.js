const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("plasmic.json");
const bt = require('best-tools');
exports.run = async(client, message, args) => {
  db.add(`bankakapasite_${message.author.id}`, 30)
  let miktarsonuç = (bt.rastgele("500", "pozitif"))
    var sebep = ["dilendi","Enginardan para dilendi","Pythonic'den para dilendi","fadeaway dan para dilendi","kimseden para dilenmedi","şoförden para dilendi","zengin birinden para dilendi","çöpçüden para dilendi"]
    var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
    db.add(`para_${message.author.id}`, miktarsonuç)
    const embed = new discord.MessageEmbed()
    .setDescription(`${message.author.username} ${sebepsonuç} ve ${miktarsonuç}  :coin:  topladı!`)
    return message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'dilen' 
  }