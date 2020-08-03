const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "shmuzi";

client.on("message", message => {

if (message.content.startsWith(prefix + "dm")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'ignore').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **MESSAGE SENT** `); 
 message.delete(); 
};     
});


client.on('ready',()=>{
    console.log(' Bot is online right now ');
    let statuses = [
        "  join me discord server ",
        "  https://discord.gg/JDucRZp ",
        "  best discord server "
        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setActivity(status, {type:"TO GET FREE NITRO"})
    
        }, 3000) //Atleast set seconds to random



});

client.login("NzM5Nzc1MTI0NDM3MjA1MDA0.XyfXRg.5eheS0jZqyHloCDeVWdGRYa2nfQ");