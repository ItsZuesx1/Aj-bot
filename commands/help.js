const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
module.exports = {
  name: 'help',
      execute(message, args){
        
var embed = new Discord.MessageEmbed()
.setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 1024}))
.setAuthor(`My Prefix In ${message.guild.name} Is ${prefix}`)
.setFooter(`${message.author.tag}`)
.setDescription('COMMANDS LIST')
.addField('Ban 
          Ban Any User You Want')
.addField('Kick 
          Kick Any User Away')
.addField('User 
          Show User Information')
.setColor('RANDOM')
.setTimestamp()
.setTitle('*** Commands***')
 message.channel.send(embed)
      }
 }
  
