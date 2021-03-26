const discord = require('discord.js')
const { Database } =  require('nukleon')
const  db  = new Database("plasmic.json");
exports.run = async(client, message, args) => {
    let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);
    db.add(`bankakapasite_${message.author.id}`, 30)
    let para = db.fetch(`para_${user.id}`)
    if(para == para) {var enginar = para}
    if(para == undefined) {var enginar = "0"}
    let banka = db.fetch(`banka_${user.id}`)
    if(banka == banka) {var engin = banka}
    if(banka == undefined) {var engin = "0"}
    let kapasite = db.fetch(`bankakapasite_${user.id}`)
    if(kapasite == kapasite) {var kapasitevar = kapasite}
    if(kapasite == undefined) {var kapasitevar = "0"}
    const embed = new discord.MessageEmbed()
    .setTitle(`:moneybag:  ${user.username} kişisinin bankası :moneybag:`)
.setDescription(`:dollar:  Cebindeki para: ${enginar} \n \n :credit_card:  Bankandaki para: ${engin}/${kapasitevar}`)
.setTimestamp()
.setFooter('Powered by plasmic code - Enginar')
return message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'banka' 
  }