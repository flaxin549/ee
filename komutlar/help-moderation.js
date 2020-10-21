const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("___Flaxin Beta | Moderation Commands___ <a:gul:767782938594508850> ")
 .setTimestamp()
.setDescription(':dvd:/kick \n `Kicks the tagged person from the server`\n \n :dvd:/ban\n `Removes the tagged person from the server permanently.`\n\n :dvd:/unban \n `Unblocks the user whose id is entered.` \n\n :dvd:/clear \n `Deletes up to 100 specified messages` \n :link: ___Links___ => \n [İnvite Bot](https://discordapp.com/oauth2/authorize?client_id=702899426947235950&scope=bot&permissions=8) | [Support Server](https://discord.gg/NZRuRwb) | Vote İs Coming')
.setImage("https://cdn.discordapp.com/attachments/755128590441644143/757182509409632296/BETA.png")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderation',

}