const Discord = require('discord.js');
const client = new Discord.Client();

const SECRETSHIT = 'NzUyMzI2NDcyNDQxNzkwNDk0.X1WAoA.bfNn3GagSzfWaX9tcECGX29kJ3Y';

client.once('ready', () => {
	console.log('Ready!');
});

client.login(SECRETSHIT);

client.on('message', message => {
    console.log(message.content);
})

client.on('message', message => {
    if(message.author.username === 'Jaben'){
        message.channel.send('Jaben is talking');
    }
})

client.on('message', message => {
    if(message.author.username === 'Atomsk'){
        message.channel.send('Weeb shit incoming');
    }
})