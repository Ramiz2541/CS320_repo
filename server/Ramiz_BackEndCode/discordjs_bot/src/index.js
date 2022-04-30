require("dotenv").config();

const { Client, MessageSelectMenu } = require('discord.js');
const client = new Client();
const PREFIX = "/"

client.on('ready', () => {
    console.log(`bot name: ${client.user.username}`);
    console.log(`bot tag: ${client.user.tag}`);
    console.log('bot is ready');
});

client.on('message', (message) => {
    if (message.author.bot === true){
        return;
    }

    console.log(message.content);
    console.log(`${message.author.tag}: ${message.content}`);

    if (message.content === 'marco') {
        message.reply('polo');
        message.channel.send('channel testing: polo')
    }
});


client.on('message', (message) => {
    if (message.author.bot === true){
        return;
    }

    if (message.content.startsWith(PREFIX)){
        const [TheCommand, ...args] = message.content.trim().substring(PREFIX.length).split(" ");

        if (TheCommand === 'Signal_Event'){
            message.channel.send('event signaled in grouply');
        }else if (TheCommand === 'Cancel_Event'){
            message.channel.send('event canceled in grouply')
        }
    }
});


client.login(process.env.bot_token);

