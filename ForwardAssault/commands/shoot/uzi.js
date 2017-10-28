const commando = require('discord.js-commando')

class ShootUziCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'uzi',
            group: 'shoot',
            memberName: 'uzi',
            description: 'Uzi'
        });
    }

    async run(message, args) {
        var uzier = message.author;
        var uzid = args.slice(0)
        var uzi = message.channel.sendMessage (":boom: " + uzier + " just Uzi'd " + uzid + "!")
    
    }
}

module.exports = ShootUziCommand;