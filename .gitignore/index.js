const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){

    bot.user.setGame("$help");
    bot.user.setStatus("online");
    console.log("Connected");

});

bot.login("NDY4OTQ0Nzk3NDY2NjI0MDEw.DkSymA.eF5fiCK9iJkxWmaOeR1SSGahQX8");
