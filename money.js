const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require ("fs");
let money = require("./money.json");

bot.on("ready", async () => {
  console.log(`money.js is running`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let moneyAmt = money[message.author.id].money;

  if(!money[message.author.id]){
    money[message.author.id] = {
      money: 0
    };
  }

  if(cmd === `${prefix}getmoney`){
    moneyAmt = moneyAmt + 69;
    fs.writeFile("./money.json", JSON.stringify(money));
    let moneyEmbed = new Discord.RichEmbed()
    .addField("You received 69 kaiwhency")
     message.channel.send(moneyEmbed);

}
});
