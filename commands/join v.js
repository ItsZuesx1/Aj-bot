module.exports ={
  name : 'join v',
  execute(message , args,channel){
    if(!channel){ return; message.channel.reply('please join any channel!')};
    channel.join().catch(err =>{
      message.channel.reply('error 404 bitch'))};
                         
                         
                         
                         
                         
                        
  
