const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require ("fs");
let userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));

bot.on("ready", async () => {
  console.log('money.js is running');
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if(!userData[message.author.id + message.guild.id]) userData[message.author.id + message.guild.id] = {}
  if(!userData[message.author.id + message.guild.id].money) userData[message.author.id + message.guild.id].money = 500;

  fs.writeFile("./userData.json", JSON.stringify(userData, null, 2), (err) => {if (err) console.error(err);})

  if(cmd === `${prefix}MONEY`){
    let moneyEmbed = new Discord.RichEmbed()
    .addField("Balance", userData[message.author.id + message.guild.id].money)
     message.channel.send(moneyEmbed);

  }



});

bot.login(process.env.BOT_TOKEN);
