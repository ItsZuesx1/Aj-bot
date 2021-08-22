const prefix = '$'
module.exports = {
    name: 'say',
    execute(message, args){

        var args = message.content.substring(prefix.length).spilt('')
        
        const say = args[1].join("")

        message.channel.send(say)
    }
}