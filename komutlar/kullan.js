const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("plasmic.json");
const bt = require('best-tools');
exports.run = async(client, message, args) => {
    if(!args[0]) return message.channel.send(`Lütfen bir eşya idi belirtin! \n \n Eşya idlerini bilmiyorsanız !market komutunu kullanın`)

if(args[0] == "silah") {
    let silah = db.fetch(`silah_${message.author.id}`)
    if(silah == silah) {var silahvar = silah}
    if(silah == undefined) {var silahvar = "0"}
    const engin = new discord.MessageEmbed()
    .setTitle('Eşya yok!')
    .setDescription(`Elinde silah olmadığından kullanamazsın!`)
    if(silah == undefined) return message.channel.send(engin)
    if(silahvar > 0) {
        let miktar = (bt.rastgele("350", "pozitif"))
        var sebep = ["aslan avlayıp sattı","kuş avlayıp sattı","zürafa avlayıp sattı","enginar avlayıp sattı","bukalemon avlayıp sattı","çita avlayıp sattı","kendini avlayıp sattı","maymun avlayıp sattı"]
        var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
        db.add(`para_${message.author.id}`, miktar)
        const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} bir hayvan avladı!`)
        .setDescription(`${message.author.username} ${sebepsonuç} ve ${miktar}  :coin:  kazandı!`)
    return message.channel.send(embed)
    }
}
if(args[0] == "balta") {
    let balta = db.fetch(`balta_${message.author.id}`)
    if(balta == balta) {var baltavar = balta}
    if(balta == undefined) {var baltavar = "0"}
    const engin = new discord.MessageEmbed()
    .setTitle('Eşya yok!')
    .setDescription(`Elinde balta olmadığından kullanamazsın!`)
    if(balta == undefined) return message.channel.send(engin)
    if(baltavar > 0) {
        let miktar = (bt.rastgele("250", "pozitif"))
        var sebep = ["ağaç kesti"]
        var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
        db.add(`para_${message.author.id}`, miktar)
        const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} bir ağaç kesti!`)
        .setDescription(`${message.author.username} ${sebepsonuç} ve ${miktar}  :coin:  kazandı!`)
    return message.channel.send(embed)
    }
}
if(args[0] == "olta") {
    let olta = db.fetch(`olta_${message.author.id}`)
    if(olta == olta) {var oltavar = olta}
    if(olta == undefined) {var oltavar = "0"}
    const engin = new discord.MessageEmbed()
    .setTitle('Eşya yok!')
    .setDescription(`Elinde olta olmadığından kullanamazsın!`)
    if(olta == undefined) return message.channel.send(engin)
    if(oltavar > 0) {
        let miktar = (bt.rastgele("300", "pozitif"))
        var sebep = ["sazan avladı","enginar avladı","hamsi avladı","levrek avladı","bir şey avlayamadı ama"]
        var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
        db.add(`para_${message.author.id}`, miktar)
        const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} bir balık avladı!`)
        .setDescription(`${message.author.username} ${sebepsonuç} ve ${miktar}  :coin:  kazandı!`)
    return message.channel.send(embed)
    }
}
if(args[0] == "bitcoin") {
    let bitcoin = db.fetch(`bitcoin_${message.author.id}`)
    if(bitcoin == bitcoin) {var bitcoinvar = bitcoin}
    if(bitcoin == undefined) {var bitcoinvar = "0"}
    const engin = new discord.MessageEmbed()
    .setTitle('Eşya yok!')
    .setDescription(`Elinde bitcoin olmadığından kullanamazsın!`)
    if(bitcoin == undefined) return message.channel.send(engin)
    if(bitcoinvar > 0) {
        let miktar = (bt.rastgele("8000", "pozitif"))
        db.math(`bitcoin_${message.author.id}`,"-", 1)
        db.add(`para_${message.author.id}`, miktar)
        const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} bir bitcoin kullandı!`)
        .setDescription(`${message.author.username} bitcoin kullandı ve ${miktar}  :coin:  kazandı!`)
    return message.channel.send(embed)
    }
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kullan' 
  }