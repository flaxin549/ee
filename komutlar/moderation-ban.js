const Discord = require('discord.js');
const moment = require('moment')
const talkedRecently = new Set();

exports.run = async (bot, message, args) => {

    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  
  

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You must have the 'Ban Members' authority to use this command.");
    let reason = args.slice(1).join(' ')
    
    if (!args[0]) return message.channel.send("Tag the user you want to ban.")
    let user = message.mentions.users.first() || bot.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user

    if (!user) return message.channel.send(`I could not find the user you tagged on the server.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`I could not find the user you tagged on the server.`)
   
    message.channel.send(`${user.tag}, To ban this user from the server ** yes ** If not to ban it, write ** no **`)
        let uwu = false;
            while (!uwu) {
                const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
                const choice = response.first().content
                if (choice == 'no' || choice == 'n') return message.channel.send('🚀 Transaction canceled ')
                if (choice !== 'yes' && choice !== 'y') {
                message.channel.send('Please answer only with **yes (y)** or **no (n)**.')
                }
                if (choice == 'yes' || choice == 'y') uwu = true
                }
                if (uwu) {
                try {
                await member.ban(reason + ` | Yetkili: ${message.author.tag} - ${message.author.id}`)
  
                message.channel.send(`**${user.tag}** The user named has been banned from the server.`)
      
user.send(`**${message.guild.name}** You have been banned from the server!**\n*Reason* \`\`\`${reason}\`\`\``)

                let embed = new Discord.MessageEmbed()
                    .setColor(0xffa300)
                    .setAuthor(`${user.username} adlı kişi yasaklandı!`, user.avatarURL||user.defaultAvatarURL)
                    .addField('Banned User', `${user.tag}-[${user.id}]`, true)
                    .addField('Authority Banning', `${message.author.tag}-[${message.author.id}]`, true)
                    .addField('Reason for Ban', reason, true);
                  return message.channel.send(embed)
            } catch(e) {
            message.channel.send('')
        }
    } else return console.log('ALERT')
   }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yarak'],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'nblm',
  usage: 'ban'
};