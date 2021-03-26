const discord = require('discord.js')
exports.run = async(client, message , args) => {
let engin = new discord.MessageEmbed()
.setDescription(":moneybag: **PARA KAZANMA KOMUTLARI** :moneybag: \n\n  `ara`  \n \n `çalış` \n  \n`dilen` \n \n :credit_card: **BANKA KOMUTLARI** :credit_card: \n\n  `para-yatır`  \n  \n `para-çek` \n \n `banka` \n  \n `çanta` \n \n :toolbox: **SATIN ALIM VE MARKET KOMUTLARI** :toolbox: \n\n  `market`  \n  \n `satın-al` \n  \n `sat`  \n  \n `kullan` \n \n :clock12: **SÜRELİ KOMUTLAR** :clock12: \n\n `çal` \n \n `günlük`")
message.channel.send(engin)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım' 
  }