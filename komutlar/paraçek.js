const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("plasmic.json");
exports.run = async(client, message, args) => {
  db.add(`bankakapasite_${message.author.id}`, 30)
let argss = args[0]
let banka = db.fetch(`banka_${message.author.id}`)
if(banka == banka) {var bankapara = banka}
if(banka == undefined) {var bankapara = "0"}
if(Number(args[0]) < bankapara) {
    db.math(`banka_${message.author.id}`, "-", Number(argss))
    db.add(`para_${message.author.id}`, Number(argss))
    const embed = new discord.MessageEmbed()
    .setTitle('Başarılı işlem!')
    .setDescription(`Başarı ile ${argss}  :coin:  miktarındaki parayı bankadan çektiniz!`)
    return message.channel.send(embed)
}
if(Number(args[0]) == bankapara) {
    db.math(`banka_${message.author.id}`, "-", Number(argss))
    db.add(`para_${message.author.id}`, Number(argss))
    const embed = new discord.MessageEmbed()
    .setTitle('Başarılı işlem!')
    .setDescription(`Başarı ile ${argss}  :coin:  miktarındaki parayı bankadan çektiniz!`)
    return message.channel.send(embed)
}
if(Number(args[0]) > bankapara) return message.channel.send('Yetersiz bakiye!')
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'para-çek' 
  }