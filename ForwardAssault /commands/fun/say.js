const commando = require('discord.js-commando')

class SayCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'fun',
            memberName: 'say',
            description: 'make the bot say something'
        });
    }

    async run(message, args) {
        var sayer = message.author
        var args1 = args.slice(0)
        var say = message.channel.sendMessage ( sayer +' Just said: ' + args1 + '')
    }
}

module.exports = SayCommand