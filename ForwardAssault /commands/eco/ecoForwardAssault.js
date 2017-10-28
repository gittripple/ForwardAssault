const commando = require('discord.js-commando')

class LoginForwardAssault extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'info2',
            group: 'eco',
            memberName: 'info2',
            description: 'infoooooool'
        })
    }

    async run(message, args) {
        if(message.content === '=info2 ForwardAssault') {
            message.channel.sendMessage ('Dont do that! He is the owner! He has infinite Grambodies!')
        }
    }
}

module.exports = LoginForwardAssault;