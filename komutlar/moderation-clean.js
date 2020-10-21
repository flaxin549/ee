const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

      let flaxin  = args[0]

  if (!flaxin ) return message.reply(':warning: You Did Not Specify  Value! :warning:')
  if (isNaN(flaxin )) return message.repy('The Delete Value Can Only Be Made Of Numbers')
  
  if (flaxin < 0) return message.reply('You cannot specify a value less than 0')
    if (flaxin  < 1) return message.reply("You can't specify a value less than 1")
      if (flaxin  < 2) return message.reply('You Cannot Specify Less Than 2 Value')

  if(flaxin > 100) return message.reply('You cannot specify a value greater than 100')
  
  
  message.channel.bulkDelete(flaxin).then(() =>  {
 message.channel.send(`🚀 ${flaxin} Up Rocket Successfully Sent To Infinity.`)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'clear'
};