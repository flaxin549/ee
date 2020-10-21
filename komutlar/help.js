const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("___Flaxin Beta | All Commands___ <a:gul:767782938594508850> ")
 .setTimestamp()
.setDescription(':dvd: /moderation \n `Shows moderation commands.`\n \n :tada: /fun \n `Shows entertainment commands.` \n \n :bust_in_silhouette: /user \n `Shows user commands.` \n \n :gear: /register-system \n `Shows commands about the register system.` \n \n :tools: /jail-system \n `Shows commands about the jail system.` \n \n :microphone2: /mute-system  \n `Lists mute commands` \n \n :arrow_double_up: /level \n `Shows commands of the level system.`\n \n :key: /public \n `Shows commands required for public servers.` \n \n :hammer_pick: /security \n `Show all security system commands`\n \n :link: ___Links___ => \n [İnvite Bot](https://discordapp.com/oauth2/authorize?client_id=702899426947235950&scope=bot&permissions=8) | [Support Server](https://discord.gg/NZRuRwb) | Vote İs Coming')
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
  name: 'help',

}