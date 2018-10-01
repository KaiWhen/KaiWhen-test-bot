const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require ("fs");
let userData = JSON.parse(fs.readFileSync('userData.json', 'utf8'));
const moment = require ("moment");

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
  if(!userData[message.author.id + message.guild.id].prevDaily) userData[message.author.id + message.guild.id].prevDaily = "Not Collected";

  fs.writeFile("userData.json", JSON.stringify(userData), (err) => {
    if (err) console.error(err);
  });

  if(cmd === `${prefix}money`){
    let moneyEmbed = new Discord.RichEmbed()
    .addField("Balance", userData[message.author.id + message.guild.id].money + " kaiwhency")
     message.channel.send(moneyEmbed);
   }

     if(cmd === `${prefix}daily`){
       if(userData[message.author.id + message.guild.id].prevDaily != moment().format('L')){
         userData[message.author.id + message.guild.id].prevDaily = moment().format('L')
         userData[message.author.id + message.guild.id].money += 200;

         let dailyEmbed = new Discord.RichEmbed()
         .addField("Daily Reward", "You have just received 200 kaiwhency!")
          message.channel.send(dailyEmbed);

       }
       else{
         message.channel.send("don't be greedy ffs");
       }


  }



});

bot.login(process.env.BOT_TOKEN);
