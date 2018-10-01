const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require ("fs");
const money = require ("./money.js");
let items = JSON.parse(fs.readFileSync('items.json', 'utf8'));
let userData = JSON.parse(fs.readFileSync('userData.json', 'utf8'));
const moment = require ("moment");

bot.on("ready", async () => {
  console.log('buy.js is running');
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let msg = message.content.toUpperCase();

    
    




});


