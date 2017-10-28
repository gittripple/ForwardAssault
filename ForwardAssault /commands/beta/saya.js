const commando = require('discord.js-commando')

class SayaCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'saya',
            group: 'fun',
            memberName: 'saya',
            description: 'make the bot say something'
        });
    }

    async run(message, args) {
        var sayer = message.author
        var args1 = args.slice(0)
        var say = message.channel.sendMessage ( sayer +' Just said: ' + args1 + '')
        
        message.channel.sendMessage ('saya')
        message.delete()
    }
}

module.exports = SayaCommand

