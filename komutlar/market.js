const discord = require('discord.js')
exports.run = async(client, message , args) => {
let engin = new discord.MessageEmbed()
.setTitle('Market menüsü')
.setDescription(":euro: **PARANA PARA KATMAK İÇİN EŞYA** :euro: \n \n `balta` \n \n `olta` \n \n `silah` \n \n :key: **KORUNMA EŞYALARI** :key: \n \n `padlock` \n \n :gift: **SANŞ EŞYALARI** :gift: \n \n `bitcoin`")
message.channel.send(engin)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'market' 
  }