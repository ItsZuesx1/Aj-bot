const Discord = require('discord.js')
const client = new Discord.Client
const moment = require('moment')
const prefix = '$'
 
module.exports = {
    name: 'user',
     execute(message , args){
     var userr = message.mentions.users.first() || message.author;
     var member = message.mentions.members.first() || message.member;
     let userinfo = userr.displayAvatarURL({size: 2048 , dynamic: true});
     var uc = moment(userr.createdAt).format('DD/MM/YYYY')
     var embed = new Discord.MessageEmbed()
     .setTitle("***User Info***")
     .setDescription(`Joined Discord : ${userr.uc}`)
     .setAuthor(`${userr.username}`)
     .setThumbnail(userinfo)
     .setTimestamp() 
     .setColor('#12943')


     message.channel.send(embed)
     }
     }
