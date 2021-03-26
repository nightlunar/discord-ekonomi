const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("plasmic.json");
exports.run = async(client, message, args) => {
    if(!args[0]) return message.channel.send(`Lütfen bir eşya idi belirtin! \n \n Eşya idlerini bilmiyorsanız !market komutunu kullanın`)
    if(args[0] == "bitcoin") {
        let bitcoin = db.fetch(`bitcoin_${message.author.id}`)
        if(bitcoin == bitcoin) {var bitcoinvar = bitcoin}
        if(bitcoin == undefined) {var bitcoinvar = "0"}
        const engin = new discord.MessageEmbed()
        .setTitle('Eşya yok!')
        .setDescription(`Elinde bitcoin olmadığından satamazsın!`)
        if(bitcoin == undefined) return message.channel.send(engin)
        if(bitcoinvar > 0) {
            db.math(`bitcoin_${message.author.id}`,"-", 1)
            db.add(`para_${message.author.id}`, 3000)
            const embed = new discord.MessageEmbed()
            .setTitle(`${message.author.username} bir bitcoin sattı!`)
            .setDescription(`${message.author.username} bitcoin sattı ve 3000  :coin:  kazandı!`)
        return message.channel.send(embed)
        }
    }
    if(args[0] == "balta") {
        let balta = db.fetch(`balta_${message.author.id}`)
        if(balta == balta) {var baltavar = balta}
        if(balta == undefined) {var baltavar = "0"}
        const engin = new discord.MessageEmbed()
        .setTitle('Eşya yok!')
        .setDescription(`Elinde balta olmadığından satamazsın!`)
        if(balta == undefined) return message.channel.send(engin)
        if(baltavar > 0) {
            db.math(`balta_${message.author.id}`,"-", 1)
            db.add(`para_${message.author.id}`, 5000)
            const embed = new discord.MessageEmbed()
            .setTitle(`${message.author.username} bir balta sattı!`)
            .setDescription(`${message.author.username} balta sattı ve 5000 :coin:  kazandı!`)
        return message.channel.send(embed)
        }
    }
    if(args[0] == "olta") {
        let olta = db.fetch(`olta_${message.author.id}`)
        if(olta == olta) {var oltavar = olta}
        if(olta == undefined) {var oltavar = "0"}
        const engin = new discord.MessageEmbed()
        .setTitle('Eşya yok!')
        .setDescription(`Elinde olta olmadığından satamazsın!`)
        if(olta == undefined) return message.channel.send(engin)
        if(oltavar > 0) {
            db.math(`olta_${message.author.id}`,"-", 1)
            db.add(`para_${message.author.id}`, 3700)
            const embed = new discord.MessageEmbed()
            .setTitle(`${message.author.username} bir olta sattı!`)
            .setDescription(`${message.author.username} olta sattı ve 3700 :coin:  kazandı!`)
        return message.channel.send(embed)
        }
    }
    if(args[0] == "silah") {
        let silah = db.fetch(`silah_${message.author.id}`)
        if(silah == silah) {var silahvar = silah}
        if(silah == undefined) {var silahvar = "0"}
        const engin = new discord.MessageEmbed()
        .setTitle('Eşya yok!')
        .setDescription(`Elinde silah olmadığından satamazsın!`)
        if(silah == undefined) return message.channel.send(engin)
        if(silahvar > 0) {
            db.math(`silah_${message.author.id}`,"-", 1)
            db.add(`para_${message.author.id}`, 10000)
            const embed = new discord.MessageEmbed()
            .setTitle(`${message.author.username} bir silah sattı!`)
            .setDescription(`${message.author.username} silah sattı ve 10000 :coin:  kazandı!`)
        return message.channel.send(embed)
        }
    }
    if(args[0] == "padlock") {
        let padlock = db.fetch(`padlock_${message.author.id}`)
        if(padlock == padlock) {var padlockvar = padlock}
        if(padlock == undefined) {var padlockvar = "0"}
        const engin = new discord.MessageEmbed()
        .setTitle('Eşya yok!')
        .setDescription(`Elinde padlock olmadığından satamazsın!`)
        if(padlock == undefined) return message.channel.send(engin)
        if(padlockvar > 0) {
            db.math(`padlock_${message.author.id}`,"-", 1)
            db.add(`para_${message.author.id}`, 2500)
            const embed = new discord.MessageEmbed()
            .setTitle(`${message.author.username} bir padlock sattı!`)
            .setDescription(`${message.author.username} padlock sattı ve 2500 :coin:  kazandı!`)
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
    name: 'sat' 
  }