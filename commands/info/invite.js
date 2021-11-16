const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "invite",
  aliases: ["info"],
  description: "Shows all commands of the bot",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("THX FOR INVITING")
      .setDescription("DISCORD BOT BY <@820928134886326272> <@849299149874004019>")
      .setImage('https://cdn.discordapp.com/attachments/890116247822434355/890535152168607744/standard_45.gif')
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("Click on these buttons to know more about me!")
      .setColor("#FFFFF0")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel(' Invite Me')
      .setEmoji('889814501506056202') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=888274129084645408&permissions=8&scope=bot")

      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel(' Support Server') 
      .setEmoji(`889820978358681610`)
      .setURL("https://discord.gg/jSCc2AXPtR")

      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('DEVLOPERS YOUTUBE') 
      .setEmoji(`889822366945914890`)
      .setURL("https://www.youtube.com/DevelopersZone")
       let button4 = new disbut.MessageButton()
      .setStyle('gray')
      .setID('button1')
      .setLabel('DEVLOPERS - ! The Crazy#0070') 
      .setDisabled(true)
      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3,button4],
      });

  },
};
//by the quickzerr and fixed by NISHANT aka DEVIL
