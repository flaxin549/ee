const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {
  
let flaxin = message.mentions.users.first()
let sebep = args.slice(1).join(' ')

if (!flaxin) {
  const flaxin = new Discord.MessageEmbed()
  .setDescription('You have to tagged who to kick!')
  return message.channel.send(flaxin)
}

  if(flaxin.id === client.user.id) {
     const flaxin1 = new Discord.MessageEmbed()
  .setDescription("Do you think you're going to try to kick me on my own command LoL that's impossible.")
  return message.channel.send(flaxin1)
  }
   if(flaxin.id === message.author.id) {
      const flaxin2 = new Discord.MessageEmbed()
  .setDescription('Dude are you serious? this is bullshit.')
  return message.channel.send(flaxin2)
   }
  
  if(!sebep) {
  const flaxin3 = new Discord.MessageEmbed()
  .setDescription("You Must Provide a Reason or I can't ban it for no reason.")
  return message.channel.send(flaxin3)
  }

  message.guild.member(flaxin).kick();
 const flaxin4 = new Discord.MessageEmbed()
  .setDescription(`${flaxin} with success ${sebep} for the reason ${message.auhtor.tag} sent to the least known place in space thanks to.`)
  return message.channel.send(flaxin4)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}
exports.help = {
  name: "kick"
}