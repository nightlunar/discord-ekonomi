const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("plasmic.json");
const bt = require('best-tools');
exports.run = async(client, message, args) => {
  db.add(`bankakapasite_${message.author.id}`, 50)
let kalan = bt.hesapla(``)
let para = db.fetch(`para_${message.author.id}`)
if(para == para) {var enginar = para}
if(para == undefined) {var enginar = "0"}
if(Number(args[0]) > para) {
const embed = new discord.MessageEmbed()
.setTitle('Hatalı işlem!')
.setDescription(`Bu işlemi yapabilmek için yeterli paranız yok! \n \n Toplam paran: ${enginar}  :coin:`)
return message.channel.send(embed)
}
let banka = db.fetch(`banka_${message.author.id}`)
if(banka == banka) {var engin = banka}
if(banka == undefined) {var engin = "0"}
let kapasite = db.fetch(`bankakapasite_${message.author.id}`)
let bankakapasite = db.fetch(`bankakapasite_${message.author.id}`)
if(bankakapasite == bankakapasite) {var bankakapasitevar = bankakapasite}
if(bankakapasite == undefined) {var bankakapasitevar = "0"}
const embed = new discord.MessageEmbed()
.setTitle('Kapasite sınırı aşılamaz!')
.setDescription(`Bankaya ${Number(args[0])}  :coin:  miktarında para koymaya çalıştınız ancak banka kapasiteniz ${bankakapasitevar} \n \n Bankanızadaki toplam para: ${engin}  :coin:`)
if(kapasite > Number(args[0])) return message.channel.send(embed)
db.math(`para_${message.author.id}`, "-", Number(args[0]))
db.add(`banka_${message.author.id}`, Number(args[0]))
const embedd = new discord.MessageEmbed()
.setTitle('Başarılı işlem!')
.setDescription(`Başarı ile ${Number(args[0])}  :coin:  miktarındaki parayı bankaya koydunuz!`)
return message.channel.send(embedd)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'para-yatır' 
  }