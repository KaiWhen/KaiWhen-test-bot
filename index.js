const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

var rnd;
var rps;

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
  if(message.channel.type === "gei") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}report`){

    let repUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!repUser) return message.channel.send("Could not find user");
    let reason = args.join(" ").slice(30);

    let repEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#ff0000")
    .addField("Reported User", `${repUser} ID: ${repUser.id}`)
    .addField("Reported by", `${message.author} ID: ${messgae.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);


    return;
    }

  //botinfo command
  if(cmd === `${prefix}botinfo`){

    let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("KaiWhen's bot info")
    .setThumbnail(boticon)
    .setColor("#35ff71")
    .addField("Bot name:", bot.user.username)
    .addField("Created on:", bot.user.createdAt)
    .addField("ur mom sucks")

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
