const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require ("fs");
let userData = JSON.parse(fs.readFileSync('userData.json', 'utf8'));
let items = JSON.parse(fs.readFileSync('items.json', 'utf8'));
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
  let msg = message.content.toUpperCase();

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

  if(cmd === `${prefix}buy`){

    let categories = [];





    let itemName = '';
    let itemPrice = 0;
    let itemDesc = '';

    for (var i in items) {
        if (args.join(" ").trim().toUpperCase() === items[i].name.toUpperCase()) {
            itemName = items[i].name;
            itemPrice = items[i].price;
            itemDesc = items[i].desc;
        }
    }

    if (!itemName) {
      return message.channel.send('**Item not found.**');
    }

        if (userData[message.author.id + message.guild.id].money <= itemPrice) {

            return message.channel.send(`**You don't have enough money for this item.**`);
        }

        if (userData[message.author.id + message.guild.id].money >= itemPrice) {

            message.channel.send('**You bought ' + itemName + '!**');
            userData[message.author.id + message.guild.id].money -= itemPrice;

        }


            if (itemName === 'Test Command') {
                message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "test"));
            }


return;


}

if(cmd === `${prefix}shop`){

    let categories = [];

    for(var i in items){

        if(!categories.includes(items[i].type)){
            categories.push(items[i].type)

        }
    }
        let itemEmbed = new Discord.RichEmbed()
        .setDescription("Items")

        for(i = 0; i < categories.length; i++){

            var iDesc = '';

            for(var c in items){

                if(categories[i] === items[c].type){

                    iDesc += `${items[c].name} | ${items[c].price} | ${items[c].desc}\n`;
                }
            }

            itemEmbed.addField(categories[i], iDesc)

        }

        return message.channel.send(itemEmbed);

}

});

bot.login(process.env.BOT_TOKEN);
