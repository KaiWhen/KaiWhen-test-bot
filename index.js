const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

var rnd;

var sayRnd = new Array(5);

sayRnd[0] = "fuk u";
sayRnd[1] = "Hello!";
sayRnd[2] = "u suck";
sayRnd[3] = "My balls are itchy. wbu?";
sayRnd[4] = "something";
sayRnd[5] = "YEET";

bot.on("ready", async () => {
  console.log(`${bot.user.username} is on bois`);
  bot.user.setActivity("with ur mom");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "gei") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}botinfo`){

    let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("KaiWhen's bot info")
    .setIcon(boticon)
    .setColor("#35ff71")
    .addField("Bot name:", bot.user.username);

    return message.channel.send(botembed, boticon);
  }

  if(cmd === `${prefix}saysomething`){
    rnd = Math.floor(Math.random()*6)
    return message.channel.send(sayRnd[rnd]);

    }
    if(cmd === `${prefix}fuckyou`){
      return message.channel.send("no fuk u");
      }
});

bot.on('message', msg => {
  if (msg.content === 'gei') {
    msg.channel.send('no u');
  }
});

bot.login(process.env.BOT_TOKEN);
