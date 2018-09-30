const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var rps;
var rpsrnd;
var rpsact = false;

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

    if(cmd === `${prefix}rps`){
        message.channel.send("Type rock, paper, or scissors");
        rpsact = true;
        rpsrnd = Math.floor(Math.random()*2)
        if(msg.content === 'rock' && rpsrnd === 0 && rpsact === true){
           message.channel.send("rock");
           message.channel.send("It's a draw!");
           rpsact = false;
        }
        else if(msg.content === 'rock' && rpsrnd === 1 && rpsact === true){
          message.channel.send("paper");
          message.channel.send("HA! I win. What a loserrr");
          rpsact = false;
        }
        else if(msg.content === 'rock' && rpsrnd === 2 && rpsact === true){
          message.channel.send("scissors");
          message.channel.send("SHIT FUCK");
          rpsact = false;
        }
        else if(msg.content === 'paper' && rpsrnd === 0 && rpsact === true){
          message.channel.send("rock");
          message.channel.send("SHIT FUCK");
          rpsact = false;
        }
        else if(msg.content === 'paper' && rpsrnd === 1 && rpsact === true){
          message.channel.send("paper");
          message.channel.send("It's a draw!");
          rpsact = false;
        }
        else if(msg.content === 'paper' && rpsrnd === 2 && rpsact === true){
          message.channel.send("scissors");
          message.channel.send("HA! I win. What a loserrr");
          rpsact = false;
        }
        else if(msg.content === 'scissors' && rpsrnd === 0 && rpsact === true){
          message.channel.send("rock");
          message.channel.send("HA! I win. What a loserrr");
          rpsact = false;
        }
        else if(msg.content === 'scissors' && rpsrnd === 1 && rpsact === true){
          message.channel.send("paper");
          message.channel.send("SHIT FUCK");
          rpsact = false;
        }
        else if(msg.content === 'scissors' && rpsrnd === 2 && rpsact === true){
          message.channel.send("scissors");
          message.channel.send("It's a draw!");
          rpsact = false;
        }
        return;
    }

});

bot.login(process.env.BOT_TOKEN);
