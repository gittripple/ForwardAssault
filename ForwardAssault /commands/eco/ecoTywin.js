const commando = require('discord.js-commando')

class LoginTywin extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'infotywin',
            group: 'eco',
            memberName: 'infotywin',
            description: 'lololol idk'
        })
    }

    async run(message, args) {
        var infotywin = message.channel.sendMessage ('Tywin has: 1 Grambodie.')
    }
}

module.exports = LoginTywin