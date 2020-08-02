// dependancies

var Discord = require("discord.js");
var fs = require("fs");

var http = require("http");
var url = require("url");


// default functions

var bot = new Discord.Client();

var botStartedYear = Date.getYear();
var botStartedMonth = Date.getMonth();
var botStartedDay = Date.getDay();
var botStartedHour = Date.getHours();
var botStartedMinute = Date.getMinutes();
var botStartedSecond = Date.getSecond();
var botStartedMillisecond = Date.getMillisecond();


// bot.on('ready', ())

bot.on('ready', () => {
	
	console.log("");
	
	var botReadEmbed = new Discord.RichEmbed()
		botReadEmbed.setColor("#")
		botReadEmbed.setAuthor({"name": "",
"id": "533016846031650826"})
		botReadEmbed.setTitle("**I am ready to work !**")
		botReadEmbed.addField(`I was started the ${botStartedDay}:${botStartedMonth}:${botStartedYear} at ${botStartedHour}:${botStartedMinute}:${botStartedSecond}:${botStartedMillisecond} !`)
	
	msg.channel({"name": "📰ayzefrbot-logs",
"id": ""}).send(botReadEmbed)
	
});

bot.on("message", msg => {
	
	if (msg.content === botPrefix +"help") {
		
		var helpMessageEmbed = new Discord.RichEmbed()
			helpMessageEmbed.setColor("#")
			helpMessageEmbed.setAuthor({"name": "AyzeFR",
"id": "533016846031650826"})
			helpMessageEmbed.setTitle("**Help Page :**")
			helpMessageEmbed.addField("")
		
	}
	
});

bot.login(botToken);
