var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true });
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `vore`
    if (message.substring(0, 4) == 'vore') {
        var args = message.substring(0).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // vore
            case 'vore':
                bot.sendMessage({
                    to: channelID,
                    message: 'Please dont vore anyone else today, Umbrella'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
