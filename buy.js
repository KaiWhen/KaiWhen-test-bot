const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require ("fs");
const money = require ("./money.js");
const items = JSON.parse(fs.readFileSync('items.json', 'utf8'));
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

    
    if(msg.startsWith(`${prefix}BUY`)){

        let categories = [];



        if(!args.join(" ")){

            for(var i in items){

                if(!categories.includes(items[i].type)){
                    categories.push(items[i].type)

                }
            }
                const itemEmbed = new Discord.RichEmbed()
                .setDescription("Items")

                for(i = 0; i < categories.length; i++){

                    var iDesc = '';

                    for(var c in items){

                        if(categories[i] === items[c].type){

                            iDesc += `${items[c].name} | ${items[c].price} | ${items[c].desc}\n`;
                        }
                    }

                    itemEmbed.addField(categories[i], iDesc);
                    
                }
                
                message.channel.send({itemEmbed});

        }

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

        if (itemName === '') {
            return message.channel.send(`**Item ${args.join(" ").trim()} not found.**`);
        }

            if (userData[message.author.id + message.guild.id].money <= itemPrice) { 

                return message.channel.send(`**You don't have enough money for this item.**`);
            }

            if (userData[message.author.id + message.guild.id].money >= itemPrice) { 

                message.channel.send('**You bought ' + itemName + '!**');
                userData[message.author.id + message.guild.id].money -= itemPrice;

            }

                
                if (itemName === 'Test Command') {
                    message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "dont mind me")); 
                }

            

        

    }




});

bot.login(process.env.BOT_TOKEN);
