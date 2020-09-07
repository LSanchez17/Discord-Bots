const Discord = require('discord.js');
const client = new Discord.Client();

const BOTTOKEN;

client.once('ready', () => {
	console.log('Ready!');
});

client.login(SECRETSHIT);

client.on('message', message => {
    console.log(message.content);
})
