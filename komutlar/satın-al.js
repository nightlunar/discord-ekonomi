const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("plasmic.json");
exports.run = async(client, message, args) => {
    if(!args[0]) return message.channel.send(`Lütfen bir eşya idi belirtin! \n \n Eşya idlerini bilmiyorsanız !market komutunu kullanın`)
    db.add(`bankakapasite_${message.author.id}`, 30)
if(args[0] == "olta") {
    let para = db.fetch(`para_${message.author.id}`)
    if(para == para) {var enginar = para}
    if(para == undefined) {var enginar = "0"}
    const embed = new discord.MessageEmbed()
    .setTitle('Yetersiz para!')
    .setDescription(`Şu anki paran: ${enginar}  :coin: \n \n Ürünün fiyatı: 5000  :coin:`)
    if(para < 5000) return message.channel.send(embed)
    if(para > 5000) {
        db.math(`para_${message.author.id}`,"-", 5000)
        db.add(`olta_${message.author.id}`, 1)
        const embed = new discord.MessageEmbed()
        .setTitle('Satın alım başarılı!')
        .setDescription(`${message.author.username} adlı kişi 5000  :coin:  vererek olta satın aldı!`)
    return message.channel.send(embed)
    }
}
if(args[0] == "balta") {
    let para = db.fetch(`para_${message.author.id}`)
    if(para == para) {var enginar = para}
    if(para == undefined) {var enginar = "0"}
    const embed = new discord.MessageEmbed()
    .setTitle('Yetersiz para!')
    .setDescription(`Şu anki paran: ${enginar}  :coin: \n \n Ürünün fiyatı: 7500  :coin:`)
    if(para < 7500) return message.channel.send(embed)
    if(para > 7500) {
        db.math(`para_${message.author.id}`,"-", 7500)
        db.add(`balta_${message.author.id}`, 1)
        const embed = new discord.MessageEmbed()
        .setTitle('Satın alım başarılı!')
        .setDescription(`${message.author.username} adlı kişi 7500  :coin:  vererek balta satın aldı!`)
    return message.channel.send(embed)
    }
}
if(args[0] == "silah") {
    let para = db.fetch(`para_${message.author.id}`)
    if(para == para) {var enginar = para}
    if(para == undefined) {var enginar = "0"}
    const embed = new discord.MessageEmbed()
    .setTitle('Yetersiz para!')
    .setDescription(`Şu anki paran: ${enginar}  :coin: \n \n Ürünün fiyatı: 15000  :coin:`)
    if(para < 15000) return message.channel.send(embed)
    if(para > 15000) {
        db.math(`para_${message.author.id}`,"-", 15000)
        db.add(`silah_${message.author.id}`, 1)
        const embed = new discord.MessageEmbed()
        .setTitle('Satın alım başarılı!')
        .setDescription(`${message.author.username} adlı kişi 15000  :coin:  vererek silah satın aldı!`)
    return message.channel.send(embed)
    }
}
if(args[0] == "padlock") {
    let para = db.fetch(`para_${message.author.id}`)
    if(para == para) {var enginar = para}
    if(para == undefined) {var enginar = "0"}
    const embed = new discord.MessageEmbed()
    .setTitle('Yetersiz para!')
    .setDescription(`Şu anki paran: ${enginar}  :coin: \n \n Ürünün fiyatı: 3500  :coin:`)
    if(para < 3500) return message.channel.send(embed)
    if(para > 3500) {
        db.math(`para_${message.author.id}`,"-", 3500)
        db.add(`padlock_${message.author.id}`, 1)
        const embed = new discord.MessageEmbed()
        .setTitle('Satın alım başarılı!')
        .setDescription(`${message.author.username} adlı kişi 3500  :coin:  vererek padlock satın aldı!`)
    return message.channel.send(embed)
    }
}
if(args[0] == "bitcoin") {
    let para = db.fetch(`para_${message.author.id}`)
    if(para == para) {var enginar = para}
    if(para == undefined) {var enginar = "0"}
    const embed = new discord.MessageEmbed()
    .setTitle('Yetersiz para!')
    .setDescription(`Şu anki paran: ${enginar}  :coin: \n \n Ürünün fiyatı: 4000  :coin:`)
    if(para < 4000) return message.channel.send(embed)
    if(para > 4000) {
        db.math(`para_${message.author.id}`,"-", 4000)
        db.add(`bitcoin_${message.author.id}`, 1)
        const embed = new discord.MessageEmbed()
        .setTitle('Satın alım başarılı!')
        .setDescription(`${message.author.username} adlı kişi 4000  :coin:  vererek bitcoin satın aldı!`)
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
    name: 'satın-al' 
  }