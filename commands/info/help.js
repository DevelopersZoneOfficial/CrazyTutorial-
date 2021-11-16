const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')


module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setFooter("Page Home\n"+ client.user.username + " | Made by ✘ The Crazy#0070", client.user.displayAvatarURL())
        .setImage(`https://media.discordapp.net/attachments/896331997977403415/909492006835859466/standard_17.gif`)
        .setDescription(`Hi I Am The Crazy I Am Coded By ✘ The Crazy#0070
My Prefix Is Z/
I Am Open Sourced So U Will Get My source Soon By My Owner
> Youtube - [Click Here To View](https://youtube.com/DevelopersZone)
> Discord Server - [Clixk Here To Join My Discord Server](https://discord.gg/6724auG4gQ)
> Invite Me - [Click Here To Invite Me](https://discord.com/api/oauth2/authorize?client_id=888274129084645408&permissions=8&scope=bot)
My Commands Are As Follows `)
        .setColor(colors.Crazy);

        const embed1 = new Discord.MessageEmbed()
        .setTitle('Admin & Info Commands')
        .addField("ㅤ⠀⠀⠀ \n <:badges:905498322964463736> **Admin** | <a:verified:896786357605781584> **Enabled**",
          "`addrole` `announce` `ban` `embed` `hackban` `lockdown` `kick` `lock` `nuke` `removerole` `unban` `unlock` `membercount` `moveaall` `nuke` `poll` `purge` `react` `setnick` `slowmode` `snipe` `steal-emoji` `unban` `mute` `unmute` `voicekick` `warn` `autorole` `role-all`\n\n<a:info:896738877409230849> **Info** | <a:verified:896786357605781584> **Enabled** \n `anime` `avatar` `badges` `botinfo` `country` `invite` `web` `steam` `sourcebin` `whois` `shorturl` `savatar` `pokemon` `ping` `menu` `credits`"
        )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.Crazy);

        const embed2 = new Discord.MessageEmbed()
      .setTitle('Music & Image Commands')
      .addField("⠀⠀⠀ \n <a:musiccrazy:898127083191009302> **Music** | <a:verified:896786357605781584> **Enabled**",
        "`join` `leave` `play` `loop` `lyrics` `pause` `nowplaying` `playlist` `queue` `remove` `resume` `search` `shuffle` `skip` `skipto` `stop` `volume`\n\n<a:cameracrazy:905500393495232552> **Image** | <a:verified:896786357605781584> **Enabled** \n `grave` `heaven` `triggered` `wasted` `aplica` `bird` `camel` `cat` `dog` `duck` `feed` `fox` `holo` `panda` `slap` `tweet` `gae`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.Crazy);

        const embed3 = new Discord.MessageEmbed()
      .setTitle('Rank , Suggest And Fun Commands')
      .addField("ㅤ⠀⠀⠀ \n <a:level_up:905337485322764309> **Rank** | <a:verified:896786357605781584> **Enabled**","`rank` `leaderboard`\n\n <:Suggestions:906186415296098304> **Suggest** | <a:verified:896786357605781584> **Enabled** \n`set-channel` `suggest` \n\n <a:funlight:896738120463155251> **Fun** | <a:verified:896786357605781584> **Enabled** \n`8ball` `advice` `fact` `hack` `joke` `tictactoe` `topic` `why`",)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.Crazy);

        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Admin & Info Commands')
        .setEmoji('909429202095325215')
        .setValue('option1')
        .setDescription('List Admin And Info Commands')

        let option2 = new MessageMenuOption()
        .setLabel('Music & Image Commands')
        .setEmoji('909429202095325215')
        .setValue('option2')
        .setDescription('List Music And Image Commands')

        let option3 = new MessageMenuOption()
        .setLabel('Rank , Suggest & Fun Commands')
        .setEmoji('909429202095325215')
        .setValue('option3')
        .setDescription('List Rank , Suggest & Fun Commands')

        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Click here to view the help menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 100000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }

        if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
        }

        if(b.values[0] == "option6") {
            Sendmenu.edit(embed6, select)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit(" This help menu is expired! Please retype the command to view again.")
    })

    }
  };


/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */