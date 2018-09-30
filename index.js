const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

const rps = require ("./rps.js");

var rnd;

var sayRnd = new Array();

sayRnd[0] = "fuk u";
sayRnd[1] = "Hello!";
sayRnd[2] = "u suck";
sayRnd[3] = "How are you?";
sayRnd[4] = "something";
sayRnd[5] = "YEET";
sayRnd[6] = "YEET SKEET"
sayRnd[7] = "Merry Christmas!"

bot.on("ready", async () => {
  console.log(`${bot.user.username} is on bois`);
  bot.user.setActivity("with ur mom");
});

//command stuff in this thing
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  //botinfo command
  if(cmd === `${prefix}botinfo`){

    let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("KaiWhen's bot info")
    .setThumbnail(boticon)
    .setColor("#35ff71")
    .addField("Bot name:", bot.user.username)
    .addField("Created on:", bot.user.createdAt)
    .addField("Created by", "KaiWhen#9072")

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}saysomething`){
    rnd = Math.floor(Math.random()*8)
    return message.channel.send(sayRnd[rnd]);

    }
    if(cmd === `${prefix}fuckyou`){
      return message.channel.send("no fuk u");
      }
});



//words-that-make-bot-say-something-command
bot.on('message', msg => {
  if (msg.content === 'gei') {
    msg.channel.send('no u');
  }
  if (msg.content === 'im pooping') {
    msg.channel.send('ew');
  }
});

bot.login(process.env.BOT_TOKEN);
