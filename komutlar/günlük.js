const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("plasmic.json");
const talkedRecently = new Set();
exports.run = async(client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        const embed = new discord.MessageEmbed()
        .setTitle('Bekleme süresi')
        .setDescription(`:clock12:  Bu komutu günde bir kere kullanabilirsin!`)
        message.channel.send(embed);
} else {
db.add(`para_${message.author.id}`, 1000)
const embed = new discord.MessageEmbed()
.setTitle('Günlük Ödül')
.setDescription(`${message.author.username} adlı kişi günlük ödülü olan 1000  :coin:  parasını cebine koydu!`)
message.channel.send(embed)
talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 86400000);
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'günlük' 
  }