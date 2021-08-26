const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const Discord = require('discord.js');
const client  = new Discord.Client();
const moment = require('moment')
const prefix = '$';

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file =>file.endsWith('.js'))


for(const file of commandFiles) {
     const command = require(`./commands/${file}`);
     client.commands.set(command.name, command);
 }
 
client.on('ready', ready =>{
console.log('Im Ready')

})
  
client.on('message', message =>{
if(!message.content.startsWith(prefix) || message.author.bot) return;
const args =  message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
 
if(command === 'ping'){
      client.commands.get('ping').execute(message, args);
} 
else if(command === 'kick'){
     client.commands.get('kick').execute(message, args);
}
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
     if(!message.member.hasPermission('BAN_MEMBERS')) return ; 
     const args =  message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();
        if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
        }
});
client.on('message',message =>{
      if(!message.content.startsWith(prefix) || message.author.bot) return;
      const args =  message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
      if(command === 'help'){
      client.commands.get('help').execute(message, args)
      }
});
client.on('message',message =>{
      if(!message.content.startsWith(prefix) || message.author.bot) return;
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
      if(command === 'server'){
      client.commands.get('server').execute(message, args)
      }
});

client.on('message', message =>{
if(!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
if(command === 'user'){
      client.commands.get('user').execute(message ,args)
}
});

client.on('message', message => {
if(!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
if(command === 'say'){
        client.commands.get('say').execute(message ,args)
}
});
client.on('channel',channel => {
 const channel = client.channel.cache.get('')
if(!channel) return; message.channel.reply('You Dont Pick Any Channel!!!')
     channel.join().catch(err =>{console.log(e)});
});
client.login(process.env.BOT_TOKEN);
