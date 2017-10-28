const commando = require('discord.js-commando')

class RpsMahDood extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rps',
            group: 'fun',
            memberName: 'rps',
            description: 'rpsssssssl'
        })
    }

    async run(message, args) {
        var playernumberchoice = args.slice(0)
        var computernumberchoice = Math.floor(Math.random() * 3) + 1

// pnc = 2: rock, 1: paper, 3: scissors, cpu = 3: paper, 1:rock, 2: scissors

        if (message.content == '=rps 3' && playernumberchoice == '3' && computernumberchoice == '3') {
             message.channel.sendMessage ('You win I chose paper!')
        } else if (message.content == '=rps 3' && playernumberchoice == '3' && computernumberchoice == '2') {
            message.channel.sendMessage ('draw I chose scissors!')
        } else if (message.content == '=rps 3' && playernumberchoice == '3' && computernumberchoice == '1') {
            message.channel.sendMessage ('You lose I chose scissors!!')
        } else if (message.content == '=rps 1' && playernumberchoice == '1' && computernumberchoice == '1') {
            message.channel.sendMessage ('You win I chose rock!')
        } else if (message.content == '=rps 1' && playernumberchoice == '1' && computernumberchoice == '3') {
            message.channel.sendMessage ('draw I chose paper!')
        } else if (message.content == '=rps 1' && playernumberchoice == '1' && computernumberchoice == '2') {
            message.channel.sendMessage ('You lose I chose scissors!')
        } else if (message.content == '=rps 2' && playernumberchoice == '2' && computernumberchoice == '1') {
            message.channel.sendMessage ('You win I chose rock!')
        } else if (message.content == '=rps 2' && playernumberchoice == '2' && computernumberchoice == '3') {
            message.channel.sendMessage ('Draw I chose paper!')
        } else if (message.content == '=rps 2' && playernumberchoice == '2' && computernumberchoice == '2') {
            message.channel.sendMessage ('You lose I chose scissors!')
        } else {
            message.channel.sendMessage ('This is in Beta, Expect it to fail lul also: options = 2: rock, 1: paper, 3: scissors')
        }
    } 
}


module.exports = RpsMahDood;