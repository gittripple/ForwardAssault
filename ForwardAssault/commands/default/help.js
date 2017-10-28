const commando = require('discord.js-commando')

class RealHelpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'realhelp',
            group: 'default',
            memberName: 'realhelp',
            description: 'does not send a dm'
        })
    }

    async run(message, args) {
        var realhelp = message.channel.sendMessage ('=rps, =uzi =tip1')
    }
}

module.exports = RealHelpCommand