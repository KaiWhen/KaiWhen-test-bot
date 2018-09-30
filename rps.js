const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var rps;
var rpsrnd;
var rpsact = false;

bot.on("ready", async () => {
  console.log(`rps.js is running`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

    if(cmd === `${prefix}rps`){
      let embed = new Discord.RichEmbed()
      .addField("Rock, paper, scissors", "type your choice")
       message.channel.send(embed);
        rpsact = true;
        rpsrnd = Math.floor(Math.random()*2)
      }
        if(message.content === 'rock' && rpsrnd === 0 && rpsact === true){
          let embed = new Discord.RichEmbed()
          .addField("Rock", "It's a draw!")
           message.channel.send(embed);
           rpsact = false;
        }
        else if(message.content === 'rock' && rpsrnd === 1 && rpsact === true){
          let embed = new Discord.RichEmbed()
          .addField("Paper", "You lost!")
           message.channel.send(embed);
          rpsact = false;
        }
        else if(message.content === 'rock' && rpsrnd === 2 && rpsact === true){
          let embed = new Discord.RichEmbed()
          .addField("Scissors", "You win! I lose :(")
           message.channel.send(embed);
          rpsact = false;
        }
        else if(message.content === 'paper' && rpsrnd === 0 && rpsact === true){
          message.channel.send("rock");
          message.channel.send("SHIT FUCK");
          rpsact = false;
        }
        else if(message.content === 'paper' && rpsrnd === 1 && rpsact === true){
          message.channel.send("paper");
          message.channel.send("It's a draw!");
          rpsact = false;
        }
        else if(message.content === 'paper' && rpsrnd === 2 && rpsact === true){
          message.channel.send("scissors");
          message.channel.send("HA! I win. What a loserrr");
          rpsact = false;
        }
        else if(message.content === 'scissors' && rpsrnd === 0 && rpsact === true){
          message.channel.send("rock");
          message.channel.send("HA! I win. What a loserrr");
          rpsact = false;
        }
        else if(message.content === 'scissors' && rpsrnd === 1 && rpsact === true){
          message.channel.send("paper");
          message.channel.send("SHIT FUCK");
          rpsact = false;
        }
        else if(message.content === 'scissors' && rpsrnd === 2 && rpsact === true){
          message.channel.send("scissors");
          message.channel.send("It's a draw!");
          rpsact = false;
        }
        return;


});

bot.login(process.env.BOT_TOKEN);
