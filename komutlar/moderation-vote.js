const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms')
 exports.run = (client, message, args) => {
   let flaxin =  args.join(' ');
  if (!flaxin) return message.reply('How do you expect me to do without stating a voting question')
   
   
 
  const FLAXİN = new Discord.MessageEmbed()
  .setDescription(`${flaxin}`)
  .setFooter(`${message.author.tag} Tarafından`)
  return message.channel.send(FLAXİN).then(function(message) {

         message.react(':white_check_mark:');

         message.react(':x:');

  });

 };

     exports.conf = {
       enabled: true,
       guildOnly: false,
      aliases: ['oylama'],
  permLevel: 2
};

exports.help = {
  name: 'oylama'
};
    