const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("plasmic.json");
const talkedRecently = new Set();
const bt = require('best-tools');
exports.run = async(client, message, args) => {
    if (talkedRecently.has(message.author.id)) {

        const embed = new discord.MessageEmbed()
        .setTitle('Bekleme süresi')
        .setDescription(`:clock12:  Bu komutu saatte bir kere kullanabilirsin!`)
        message.channel.send(embed);
} else {
    let kişi = message.mentions.users.first()
    let padlocksayı = db.fetch(`padlock_${kişi.id}`)
    if(padlocksayı == padlocksayı) {var padlock = padlocksayı}
    if(padlocksayı == undefined) {var padlock = "0"}
    if(padlock > 0) {
        db.math(`padlock_${kişi.id}`,"-", 1)
        const embed = new discord.MessageEmbed()
        .setTitle('HATALI İŞLEM')
        .setDescription(`<@${kişi.id}> adlı kişiden para çalmaya çalıştın ancak kişinin padlocku olduğundan çalamadın!`)
        
    return message.channel.send(embed)
    };
    if(padlock == 0) {
        let para = db.fetch(`para_${kişi.id}`)
        if(para == para) {var enginar = para}
        if(para == undefined) {var enginar = "0"}
        //
        let eksilecek = (bt.rastgele(enginar, "pozitif"))
        db.math(`para_${kişi.id}`,"-", eksilecek)
        db.add(`para_${message.author.id}`, eksilecek)
        const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} adlı kişi para çaldı!`)
        .setDescription(`${message.author.username}, <@${kişi.id}> adlı kişiden ${eksilecek}  :coin:  miktarında para çaldı!`)
        return message.channel.send(embed)

    }
talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 3600000);
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'çal' 
  }