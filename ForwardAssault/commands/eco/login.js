const commando = require('discord.js-commando')

class LoginOwner extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'eco',
            memberName: 'info',
            description: 'lololol idk'
        })
    }

    async run(message, args) {
        var info = message.channel.sendMessage ('rekcilF has: 10000 Grambodies.')
    }
}

module.exports = LoginOwner