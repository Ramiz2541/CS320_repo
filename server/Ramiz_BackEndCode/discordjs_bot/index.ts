import DiscordJS, { Guild, Intents } from  'discord.js'
import dotenv from 'dotenv'
dotenv.config() //this lets us use env file variables as enviroment variables here
import mongoose from 'mongoose'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})



client.on('ready', async () => {
    await mongoose.connect(process.env.mongo_token || '', 
    {
        keepAlive: true //keeps connection to mongo active
    })
    
    console.log('bot is ready')

    const server_ID = '896299120921301043'

    const server = client.guilds.cache.get(server_ID)

    let commands

    if (server) {
        commands = server.commands
    }else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'awake',
        description: 'replies with status',
    })

    commands?.create({
        name: 'add',
        description: 'add 2 numbers given ',
        options: [
            {
                name: 'number_1',
                description: 'first argument',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'number_2',
                description: 'second argument',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    })

})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    const { commandName, options } = interaction

    if (commandName === 'awake') {
        interaction.reply({
            content: 'yes',
            ephemeral: true, //this bascially means only the user who prompted this message can see the response
        })
    } else if (commandName === 'add') {
        const number_1 = options.getNumber('number_1')!  //these ! are added because we required this value and it could be null
        const number_2 = options.getNumber('number_2')!  //this means that we express that we know this won't be null

        await interaction.deferReply({
            ephemeral: true
        })

        await new Promise(resolve => setTimeout(resolve, 5000))

        await interaction.editReply({
            content: `result is ${number_1 + number_2}`
        })
    }
})


client.on('messageCreate', (message) => {
    if(message.content === 'marco') {
        message.reply({
            content: 'polo',
        })
    }
})



client.login(process.env.bot_token)

