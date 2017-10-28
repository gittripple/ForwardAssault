const commando = require('discord.js-commando')

class TipOne extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'tip',
            group: 'fa gameplay',
            memberName: 'tip',
            description: 'tip one'
        })
    }

    async run(message, args) {
        var tip1 = message.channel.sendMessage ('Swipe the opposite of where the gun is shooting')
    }
}

module.exports = TipOne