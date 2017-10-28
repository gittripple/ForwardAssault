const commando = require('discord.js-commando')

class VersionCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'version',
            group: 'default',
            memberName: 'version',
            description: 'SHows da version'
        })
    }

    async run(message, args) {
        var version = message.channel.sendMessage ('Version: Beta 1.0.0')
    }
}