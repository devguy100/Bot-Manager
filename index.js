const { 
  TextInputComponent,
  Modal, 
  Client, 
  Intents, 
  MessageEmbed, 
  MessageButton, 
  MessageActionRow, 
  MessageSelectMenu
} = require('discord.js');
const config = require('./config.json')
const Roles = {
    Founder: `${config.SeverRoles.Founder}`,
    Owners: `${config.SeverRoles.Owners}`,
    CoOwner: `${config.SeverRoles.CoOwner}`,
    ChiefHumanResources: `${config.SeverRoles.ChiefHumanResources}`,
    HumanResources: `${config.SeverRoles.HumanResources}`,
    Administrator: `${config.SeverRoles.Administrator}`,
    Moderator: `${config.SeverRoles.Moderator}`,
    ChiefSupporter: `${config.SeverRoles.ChiefSupporter}`,
    Supporter: `${config.SeverRoles.Supporter}`,
    NewSupporter: `${config.SeverRoles.NewSupporter}`
}
const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.DIRECT_MESSAGES
  ] 
});

client.on('messageCreate', async (m) => {
  if(m.content == ',test') {
    m.reply('test')
  }
})

client.once('ready', () => {
  console.log('\n\n')
  console.log('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')
  console.log('┃') 
  console.log('┃') 
  console.log('┃         COMMANDS LOADED') 
  console.log('┃') 
  console.log('┃') 
  console.log(`┃         ${client.user.tag} IS NOW ONLINE`) 
  console.log('┃') 
  console.log('┃') 
  console.log('┃         BOT IS READY 2 BE USED!') 
  console.log('┃')
  console.log('┃')
  console.log('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛')
  client.user.setActivity(`the server!`, { type: 'WATCHING' });
});
//Support Tickets
function isValidTicket(channel) {
    let validCategories = [
      `1065301523770384556`
    ];
    if (!validCategories.includes(channel.parentId)) return false;
    return true;
}

client.on('messageCreate', async (message) => {
      if(message.content == ',sendticket') {
  if (message.author.id === '848185810741493810') {
    const ticket = new MessageEmbed()
    .setTitle('Create a Ticket / Application / Partnership')
    .setDescription('**If you need help, want to apply or if you are having Questions, then please Open a Ticket!**\n\n***To open a Ticket click on the Selection down below!***')
    .setFooter('Click the \'Ping me\' button before opening a ticket! And wait for a responce!')
    .setColor('GREEN')
    		const ticketButton = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('pingme')
					.setLabel('Ping me')
					.setStyle('SUCCESS')
        .setEmoji('<a:ping_2:995248973575114832>'),
        new MessageButton()
        .setCustomId('reload')
        .setLabel('Reload Ticket System')
        .setStyle('DANGER')
        .setEmoji('🔨')
			);
    		const ticketMenu = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('🔒| Nothing selected yet')
					.addOptions([
						{
							label: 'Support Ticket',
							description: 'Get help for anything you need',
							value: 'HELP',
              emoji: '🎟',
						},
            {
              label: 'Staff Application',
              description: 'Apply as a Staff Member',
              value: 'TEAMAPPLY',
              emoji: '<:apply:1030138535505829951>'
            },
            {
              label: 'Partner Application',
              description: 'Apply for a partnership',
              value: 'PARTNERAPPLY',
              emoji: '<:partner:1030154477900140645>'
             }
					]),
			);
    message.channel.send({ embeds: [ticket], components: [ticketButton, ticketMenu] })
    } 
        if(message.content == '<@1051107951571648552>') {
          const mention = new MessageEmbed()
          .setTitle('<a:yes:1032348720181817485> To see all my commands type: \`,help\`')
          message.reply({ embeds: [mention] })
        }
  }
  // Close all
  if(message.content == ',closeall') { 
      if (message.author.id === '848185810741493810') {
        const category = message.guild.channels.cache.get('1065338598456578078'); // You can use `find` instead of `get` to fetch the category using a name: `find(cat => cat.name === 'test')
category.children.forEach(channel => channel.delete())
        const closeAll = new MessageEmbed()
        .setTitle('<a:yes:1032348720181817485> Deleted all the closed tickets')
        .setTimestamp()
        message.reply({ embeds: [closeAll] })
      }
  }
    //Set Mod -
  
  if(message.content == ',setmod') {
 if (
            message.member.roles.cache.some(
              (role) => role.id === "1055513971496603678"
            )
)
      //Check if the channel is defined as isValidTicket, Otherwise, pop up the error
    if (!isValidTicket(message.channel)) return message.channel.send({
                embeds: [new MessageEmbed()
                    .setColor("RED")
                    .setTitle("This channel isn't a Ticket")
                  
                ]
            });
    // //Variables -
    
    // let emoji = "⛔"
    // let name = message.channel.name

    // //Change Channel Name -
    
    // message.channel.setName(`${name.slice(0, name.indexOf("・") - 1)}${emoji}${name.slice(name.indexOf("・"))}`)

  

    //Change Perms -
    
    let modRole = "1055511762121805825"
    message.channel.permissionOverwrites.edit(`${modRole}`, { VIEW_CHANNEL: true, SEND_MESSAGES: true});

    
    let supportRole = "1055513971496603678";
    message.channel.permissionOverwrites.edit(`${supportRole}`, { VIEW_CHANNEL: true, SEND_MESSAGES: false})
    //Confirmation Message -
    
    message.channel.send(`**<a:Loading:1006238469745541131> | Contacting <@&${modRole}>...**\n**Please be patient while the owners/co-owners are being contacted.**`).then((sentMessage) => sentMessage.edit(`<a:checkmark:1034460582671294584> | **The owners/co-owners have been contacted. Lets wait for their response :thumbsup:**`))
  }
    //Set Important -
  
  if(message.content == ',setimportant') {
 if (
            message.member.roles.cache.some(
              (role) => role.id === "1055513971496603678"
            )
)
     //Variables -
    if (!isValidTicket(message.channel)) return message.channel.send({
                embeds: [new MessageEmbed()
                    .setColor("RED")
                    .setTitle("This channel isn't a Ticket")
                  
                ]
            });
    let emoji = "❗"
    let name = message.channel.name

    //Change Channel Name -
    
    message.channel.setName(`${name.slice(0, name.indexOf("・") - 1)}${emoji}${name.slice(name.indexOf("・"))}`)

  

    //Change Perms -
    
    let modRole = "1055511762121805825"
    message.channel.permissionOverwrites.edit(`${modRole}`, { VIEW_CHANNEL: true, SEND_MESSAGES: true});
      
          let adminRole = "1055511753041117304"
    message.channel.permissionOverwrites.edit(`${adminRole}`, { VIEW_CHANNEL: true, SEND_MESSAGES: true});

    
    let supportRole = "1055513971496603678";
    message.channel.permissionOverwrites.edit(`${supportRole}`, { VIEW_CHANNEL: true, SEND_MESSAGES: false})
      
          let newsupportRole = "1055513983592960080";
    message.channel.permissionOverwrites.edit(`${newsupportRole}`, { VIEW_CHANNEL: true, SEND_MESSAGES: false})
    //Confirmation Message -
    
    message.channel.send(`**<a:Loading:1006238469745541131> | Contacting <@&${modRole}>/<@&${adminRole}>...**\n**Please be patient while the owners/co-owners are being contacted.**`).then((sentMessage) => sentMessage.edit(`<a:checkmark:1034460582671294584> | **Ticket set for important. Lets wait for their response :thumbsup:**`)) 
  }
  if(message.content == ',ping') {
    message.reply(`Ping is reported to be: ${client.ws.ping}ms`)
  }
    //Set Owner -
  
  if(message.content == ',setowner') {
       if (
            message.member.roles.cache.some(
              (role) => role.id === "1055513971496603678"
            )
)
    //Variables -
    if (!isValidTicket(message.channel)) return message.channel.send({
                embeds: [new MessageEmbed()
                    .setColor("RED")
                    .setTitle("This channel isn't a Ticket")
                  
                ]
            });
    let emoji = "👑"
    let name = message.channel.name

    //Change Channel Name -
    
    message.channel.setName(`${name.slice(0, name.indexOf("・") - 1)}${emoji}${name.slice(name.indexOf("・"))}`)

  

    //Change Perms -
    
    message.channel.permissionOverwrites.edit(`${Roles.Owners}`, { VIEW_CHANNEL: true, SEND_MESSAGES: false});

    message.channel.permissionOverwrites.edit(`${Roles.CoOwners}`, { VIEW_CHANNEL: true, SEND_MESSAGES: false});
    
    message.channel.permissionOverwrites.edit(`${Roles.Supporter}`, { VIEW_CHANNEL: false, SEND_MESSAGES: false})
      
    message.channel.permissionOverwrites.edit(`${Roles.NewSupporter}`, { VIEW_CHANNEL: false, SEND_MESSAGES: false})
    //Change category -
    message.channel.setParent('1055509527467937905') 
    //Confirmation Message -
    
    message.channel.send(`**<a:Loading:1006238469745541131> | Contacting <@&${Owners}>/<@&${CoOwners}>...**\n**Please be patient while the owners/co-owners are being contacted.**`).then((sentMessage) => sentMessage.edit(`<a:checkmark:1034460582671294584> | **The owners/co-owners have been contacted. Lets wait for their response :thumbsup:**`))
  }
    // Close command
  if(message.content == ',close') {
 if (
            message.member.roles.cache.some(
              (role) => role.id === "1055513971496603678"
            )
)
     if (!isValidTicket(message.channel)) return message.channel.send({
                embeds: [new MessageEmbed()
                    .setColor("RED")
                    .setTitle("This channel isn't a Ticket")
                  
                ]
            });
    const confirmClose = new MessageEmbed()
    .setTitle('Close this ticket')
    const closeButton = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId('CLOSE')
      .setLabel('Close')
      .setStyle('DANGER')
      .setEmoji('🔒'),
      new MessageButton()
      .setCustomId('DONTCLOSE')
      .setLabel('Don\'t Close')
      .setStyle('SUCCESS')
      .setEmoji('🔓')
    );
    message.reply({ embeds: [confirmClose], components: [closeButton] })
  }
    // Set finished Command -
    
 if(message.content == ',setfinished') {
        //Only new supporter + can do it
 if (
            message.member.roles.cache.some(
              (role) => role.id === "1055513971496603678"
            )
)
     
     //Checks if it is in a ticket -
            if (!isValidTicket(message.channel)) return message.channel.send({
                embeds: [new MessageEmbed()
                    .setColor("RED")
                    .setTitle("This channel isn't a Ticket")
                  
                ]
            });
        //Deletes the message -
        message.delete()
        //Buttons -
        const setfinishedButtons = new MessageActionRow()
        .addComponents(
        new MessageButton()
            .setCustomId('CLOSE')
            .setLabel('Close Ticket')
            .setStyle('DANGER'),
            new MessageButton()
            .setCustomId('DONTCLOSE')
            .setLabel('Keep open')
            .setStyle('SUCCESS')
        );
        //Sends the message -
        message.channel.send({ content: `**Hello <@${message.channel.topic}>**,\n\n> *Our Staff Teams Task is done! if you want to close this ticket, just click the Close ticket button below. If you have any questions, please feel to ask us!*\n\n**Best Regards,**\n> Electro | Development`, components: [setfinishedButtons] })
            let emoji = "✅"
    let name = message.channel.name

    //Change Channel Name -
    
    message.channel.setName(`${name.slice(0, name.indexOf("・") - 1)}${emoji}${name.slice(name.indexOf("・"))}`)
}
    
    // Other Set commands
    
      if(message.content == ',setdxlz') {
 if (
            message.member.roles.cache.some(
              (role) => role.id === "1055513971496603678"
            )
)
          //Variables -
    if (!isValidTicket(message.channel)) return message.channel.send({
                embeds: [new MessageEmbed()
                    .setColor("RED")
                    .setTitle("This channel isn't a Ticket")
                  
                ]
            });
    let emoji = "💠"
    let name = message.channel.name

    //Change Channel Name -
    
    message.channel.setName(`${name.slice(0, name.indexOf("・") - 1)}${emoji}${name.slice(name.indexOf("・"))}`)

  

    //Change Perms -
    
    let ownerRole = "1055511601136013443"
    message.channel.permissionOverwrites.edit(`${ownerRole}`, { VIEW_CHANNEL: true, SEND_MESSAGES: false});

    let coownerRole = "1055511734762352760"
    message.channel.permissionOverwrites.edit(`${coownerRole}`, { VIEW_CHANNEL: true, SEND_MESSAGES: false});
    
    let supportRole = "1055513971496603678";
    message.channel.permissionOverwrites.edit(`${supportRole}`, { VIEW_CHANNEL: false, SEND_MESSAGES: false})
      
          let newsupportRole = "1055513983592960080";
    message.channel.permissionOverwrites.edit(`${newsupportRole}`, { VIEW_CHANNEL: false, SEND_MESSAGES: false})
    //Change category -
    message.channel.setParent('1055509527467937905') 
    //Confirmation Message -
    
    message.channel.send(`**<a:Loading:1006238469745541131> | Contacting <@848185810741493810>...**\n**Please be patient while the owners/co-owners are being contacted.**`).then((sentMessage) => sentMessage.edit(`<a:checkmark:1034460582671294584> | **The owner have been contacted. Lets wait for their response :thumbsup:**`))
}
    if(message.content == ',delete') {
 if (
            message.member.roles.cache.some(
              (role) => role.id === Roles.Owners
            )
)
     message.channel.delete()
          }
})

client.on('interactionCreate', async (interaction) => {
	if (interaction.isButton()) {
    	if (interaction.customId == 'pingme') {
    interaction.reply({ content: `Pong!\nMy ping is ${(client.ws.ping)}ms!`, ephemeral: true })
      }
    if(interaction.customId == 'reload') {
      if(interaction.user.id == '848185810741493810') {
    const ticket = new MessageEmbed()
    .setTitle('Create a Ticket / Application / Partnership')
    .setDescription('**If you need help, want to apply or if you are having Questions, then please Open a Ticket!**\n\n***To open a Ticket click on the Selection down below!***')
    .setFooter('Click the \'Ping me\' button before opening a ticket! And wait for a responce!')
    .setColor('GREEN')
            		const ticketButton = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('pingme')
					.setLabel('Ping me')
					.setStyle('SUCCESS')
        .setEmoji('<a:ping_2:995248973575114832>'),
        new MessageButton()
        .setCustomId('reload')
        .setLabel('Reload Ticket System')
        .setStyle('DANGER')
        .setEmoji('🔨')
			);
    		const ticketMenu = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('🔒| Nothing selected yet')
					.addOptions([
						{
							label: 'Support Ticket',
							description: 'Get help for anything you need',
							value: 'HELP',
              emoji: '🎟',
						},
            {
              label: 'Staff Application',
              description: 'Apply as a Staff Member',
              value: 'TEAMAPPLY',
              emoji: '<:apply:1030138535505829951>'
            },
            {
              label: 'Partner Application',
              description: 'Apply for a partnership',
              value: 'PARTNERAPPLY',
              emoji: '<:partner:1030154477900140645>'
             }
					]),
			);
        interaction.update({ embeds: [ticket], components: [ticketButton, ticketMenu] })
      } else {
        interaction.reply({ content: 'You cannot do this, only my owner can.', ephemeral: true })
      }
    }
  }
  if (interaction.isSelectMenu) {
    if (interaction.customId == 'select') {
      //Regular Ticket
      if (interaction.values[0] === 'HELP') {
        const claim = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('CLAIM')
          .setLabel('Claim the ticket')
          .setStyle('SUCCESS')
          .setEmoji('<a:yes:1032348720181817485>')
        );
        const message = new MessageEmbed()
        .setTitle('📂 Support Ticket')
        .setDescription(`**Hello <@${interaction.user.id}>,**\n\n> Please select from the following:\n\`\`\`1. Need support\n\n2. Report a user\n\n3. Report a bug\`\`\`\n\n> *Someone will see this ticket soon.*\n\n**Meanwhile, make sure to list us all information needed!**`)
         let supportRole = "1055513971496603678"
          let newsupportRole = "1055513983592960080"
const ticket = interaction.guild.channels.create(`📂・help・${interaction.user.username}`, {
    type: "GUILD_TEXT",
    parent: "1065301523770384556",
    topic: `${interaction.user.id}`,
permissionOverwrites: [
{
id: interaction.user,
allow: ["VIEW_CHANNEL", "SEND_MESSAGES"],
},
{
id: interaction.guild.roles.everyone,
allow: [],
deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
},
        {
    id:`${Roles.Supporter}`,
    allow: ['VIEW_CHANNEL'],
    deny: ['SEND_MESSAGES']
},
{
    id:`${Roles.NewSupporter}`,
    allow: ['VIEW_CHANNEL'],
    deny: ['SEND_MESSAGES']
},
],
}).then((channel) => {
    channel.send({ content: `<@${interaction.user.id}>\n> Staff Ping: <@&${Roles.NewSupporter}>/<@&${Roles.Supporter}>`, embeds: [message], components: [claim] })
interaction.reply({ content: `Successfully created your ticket: <#${channel.id}>`, ephemeral: true })
console.log(`[TICKET]: A support ticket was made for ${interaction.user.tag}!\nId: ${interaction.user.id}`)
})
      }
      // Staff Apply
      if (interaction.values[0] === 'TEAMAPPLY') {
        const claim = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('CLAIM')
          .setLabel('Claim the ticket')
          .setStyle('SUCCESS')
          .setEmoji('<a:yes:1032348720181817485>')
        );
        const ticketOpenmsg = new MessageEmbed()
          .setTitle('📜 Thank you for applying at Electro | Development!')
          .setDescription(`**Greetings <@${interaction.user.id}>!**\n\n> **Please tell us with what you need help with?**\n> Thank you for applying as a <@&1018937502683385876>.\n\n__Please make sure to answer those Questions!!__\n\n**Questions you __must__ answer:**\n> Whats your Name and how old are you?\n> From which Country are you from and which Timezone do you have?\n> Do you have Experience as Supporter/Staff Member?\n> Why should we take YOU?\n> What are your strenghts?\n> What are your weaknesses?\n> Can you please provide us some other creative informations ...\n\n**MAKE SURE TO WRITE A LETTER AND NOT JUST ANSWER THE QUESTIONS!!**\n\n**__NOTE:__**\n> **If you show impatience in your Ticket or ping Staff Members, your application will be denied immediately!**`)
          let supportRole = "1055513971496603678"
          let newsupportRole = "1055513983592960080"
 interaction.guild.channels.create(`📜・apply・${interaction.user.username}`, {
                    type: "GUILD_TEXT",
                    parent: "1065301679077064724",
                         topic: `${interaction.user.id}`,
            permissionOverwrites: [
            {
                id: interaction.user,
                allow: ["VIEW_CHANNEL"],
                deny: ["SEND_MESSAGES"]
            },
              {
                id: interaction.guild.roles.everyone,
                allow: [],
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
              },
                                {
                    id:`${Roles.Supporter}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
                {
                    id:`${Roles.NewSupporter}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
            ],
        }).then((channel) => {
   channel.send({ content: `<@${interaction.user.id}>\n> Staff Ping: <@&${Roles.HumanResources}>/<@&${Roles.ChiefHumanResources}>`, embeds: [ticketOpenmsg], components: [claim] })
      interaction.reply({ content: `Successfully created your ticket: <#${channel.id}>`, ephemeral: true })
                                     console.log(`[TICKET]: An application ticket was made for ${interaction.user.tag}!\Id: ${interaction.user.id}`)
 })
      // Partner Ticket
       if (interaction.values[0] === 'PARTNERAPPLY') {
        const claim = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('CLAIM')
          .setLabel('Claim the ticket')
          .setStyle('SUCCESS')
          .setEmoji('<a:yes:1032348720181817485>')
        );
         let user = interaction.user.id
                   const ticketOpenmsg = new MessageEmbed()
          .setTitle('📜 Thank you for applying at Electro | Development!')
          .setDescription(`**Greetings <@${user}>!**\n\n> **Please tell us with what you need help with?**\n> Thank you for applying as a <@&1018937502683385876>.\n\n__Please make sure to answer those Questions!!__\n\n**Questions you __must__ answer:**\n> Whats your Name and how old are you?\n> From which Country are you from and which Timezone do you have?\n> Do you have Experience as Supporter/Staff Member?\n> Why should we take YOU?\n> What are your strenghts?\n> What are your weaknesses?\n> Can you please provide us some other creative informations ...\n\n**MAKE SURE TO WRITE A LETTER AND NOT JUST ANSWER THE QUESTIONS!!**\n\n**__NOTE:__**\n> **If you show impatience in your Ticket or ping Staff Members, your application will be denied immediately!**`)
          let supportRole = "1055513971496603678"
          let newsupportRole = "1055513983592960080"
 interaction.guild.channels.create(`📜・partner・${interaction.user.username}`, {
                    type: "GUILD_TEXT",
                    parent: "1065301679077064724",
                    topic: `${interaction.user.id}`,
            permissionOverwrites: [
            {
                id: interaction.user,
                allow: ["VIEW_CHANNEL"],
                deny: ["SEND_MESSAGES"]
            },
              {
                id: interaction.guild.roles.everyone,
                allow: [],
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
              },
                                {
                    id:`${Roles.Supporter}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
                {
                    id:`${Roles.NewSupporter}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
            ],
        }).then((channel) => {
   channel.send({ content: `<@${interaction.user.id}>\n> Staff Ping: <@&${Roles.HumanResources}>/<@&${Roles.ChiefHumanResources}>`, embeds: [ticketOpenmsg], components: [claim] })
      interaction.reply({ content: `Successfully created your ticket: <#${channel.id}>`, ephemeral: true })
      console.log(`[TICKET]: A partnership ticket was made for ${interaction.user.tag}!\nId: ${interaction.user.id}`)
      })
             if (interaction.values[0] === 'GENERAL') {
        const claim = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('CLAIM')
          .setLabel('Claim the ticket')
          .setStyle('SUCCESS')
          .setEmoji('<a:yes:1032348720181817485>')
        );
               const message = new MessageEmbed()
               .setTitle('🥳 Giveaway Ticket')
               .setDescription(`**Hello <@${interaction.user.id}>,**\n\n> Please state what giveaway you have won with a screenshot/message link for proof.\n\n> Once you have done that, please wait for someone to assist you.`)
               .setFooter(`Giveaway Ticket\n${interaction.user.tag}`, interaction.user.displayAvatarURL()).setTimestamp()
          let supportRole = "1055513971496603678"
          let newsupportRole = "1055513983592960080"
                  let user = interaction.user.id
 interaction.guild.channels.create(`💯・claim・${interaction.user.username}`, {
                    type: "GUILD_TEXT",
                    parent: "1065301523770384556",
                              topic: `${interaction.user.id}`,
            permissionOverwrites: [
            {
                id: interaction.user,
                allow: ["VIEW_CHANNEL"],
                deny: ["SEND_MESSAGES"]
            },
              {
                id: interaction.guild.roles.everyone,
                allow: [],
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
              },
                                {
                    id:`${Roles.Supporter}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
                {
                    id:`${Roles.NewSupporter}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
            ],
        }).then((channel) => {
   channel.send({ content: `<@${interaction.user.id}>\n> Staff Ping: <@&${Roles.NewSupporter}>/<@&${Roles.Supporter}>`, embeds: [message], components: [claim] })
      interaction.reply({ content: `Successfully created your ticket: <#${channel.id}>`, ephemeral: true })
    console.log(`[TICKET]: A claim ticket was made for ${interaction.user.tag}!\Id: ${interaction.user.id}`)
 })
      }
    }
  }
  }
  }
});

//Feedback Channel Reaction -

client.on('messageCreate', async (message) => {
      if (message.channel.id === "1058008258486485093") {
      message.react('🥰')
      message.react('✅')
      message.react('💯')
      }
})

// Buttons

client.on('interactionCreate', async (i) => {
  if(i.isButton() && i.member.roles.cache.has(Roles.NewSupporter && Roles.Supporter)) {
    if(i.customId == 'CLAIM') {
      const claimed = new MessageEmbed()
     .setAuthor(`${i.user.tag}`, i.user.displayAvatarURL())
     .setDescription(`**Ticket claimed by: <@${i.user.id}>**`)
     .setTimestamp()
      i.reply({ embeds: [claimed] })
      let everyoneRole = "1065296970043887678";
      let mainRole = "1065329096944533595";
     i.channel.permissionOverwrites.set([{ id: `${mainRole}`, allow: [], deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]}])
     i.channel.permissionOverwrites.set([{ id: `${everyoneRole}` , allow: [], deny: ["VIEW_CHANNEL", "SEND_MESSAGES"], }]);
     i.channel.permissionOverwrites.set([{ id: i.user.id , allow: ['VIEW_CHANNEL', "SEND_MESSAGES"] }]);
     i.channel.permissionOverwrites.set([{ id: `${i.channel.topic}` , allow: ["VIEW_CHANNEL", "SEND_MESSAGES"], }]);
     i.channel.permissionOverwrites.set([{ id: `${Roles.Supporter}`, allow: ["VIEW_CHANNEL"], deny: ["SEND_MESSAGES"] }])
     i.channel.permissionOverwrites.set([{ id: `${Roles.NewSupporter}`, allow: ["VIEW_CHANNEL"], deny: ["SEND_MESSAGES"] }])     
    }
  }
    if(i.isButton() && i.member.roles.cache.has(Roles.Supporter)) {
      if(i.customId == 'CLOSE') {
      i.channel.setParent('1065338598456578078') 
      let v = "1065329096944533595";
      let s = "1065328122569965609";
      let ns = "1065328280653279335";
      let mod = "1065327465314136095";
      let cso = "1065328038671294616";
      i.channel.permissionOverwrites.set(v, { VIEW_CHANNEL: false });
      i.channel.permissionOverwrites.set(s, { VIEW_CHANNEL: false });
      i.channel.permissionOverwrites.set(ns, { VIEW_CHANNEL: false });
      i.channel.permissionOverwrites.set(mod, { VIEW_CHANNEL: false });
      i.channel.permissionOverwrites.set(cso, { VIEW_CHANNEL: false });
      i.channel.permissionOverwrites.set(guild.id, { VIEW_CHANNEL: false });
            const closeEmbed = new MessageEmbed()
    .setTitle('Ticket Closed!')
    .setColor('RED')
  i.reply({ embeds: [closeEmbed] })
        const embed = new MessageEmbed()
        .setTitle('🔒 TICKET CLOSED')
        .setDescription(`**Ticket closed for <@${i.user.id}>\nTicket: <#${i.channel.id}>**\n\nExecutor: <@${i.user.id}> | ${i.user.id}`)
        .setFooter(`A ticket was closed\nElectro | Development`, i.user.displayAvatarURL()).setTimestamp()
        //client.channels.cache.get('').send({ embeds: [embed] })
      }
    }
      if(i.isButton() && i.member.roles.cache.has("1055513971496603678")) {
        if(i.customId == 'DONTCLOSE') {
          i.reply('Not closing the ticket.')
        }
      }
})

// Help Section

client.on('messageCreate', async msg => {
  if(msg.content == ',help') {
    if (msg.author.id  == '848185810741493810') {
      const helpEmbed = new MessageEmbed()
      .setAuthor(`Requested by ${msg.author.tag} | Page: Home`)
      .setDescription(`Welcome to Electro | Development, I have only have prefix commands and soon I will have slash commands :D\nCurrent Developers:\n\`dxlz#9841\`\n\`AudiRo#7652\`\n\nYou can navigate the pages by clicking "Back" or "Next". To go home, simply click "Home".\n: Bot made by simple.dev & audiro`)
      .setFooter('Page: 1/3')
      const helpButtons1 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('BACK')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
      msg.reply({ embeds: [helpEmbed], components: [helpButtons1] })
      
    } else {
      msg.channel.send(':x: Command not done yet')
    }
  }
})

// Order System -

client.on('messageCreate', async (message) => {
      if(message.content == ',setup-ordermenu') {
  if (message.author.id === '848185810741493810') {
    const ordermenu = new MessageEmbed()
    .setTitle('Order a Bot!')
    .setDescription(`**> If you want to Order a __Bot__, then please Open a Ticket by selecting the bot from the option down below!\n\n> If you need help, open a support ticket.\n\n> Please note: if you spam our ticket system, you will get muted for 48 hours.\nTHIS BOT IS STILL IN DEVELOPMENT**`)
    .setFooter('Order a bot at Electro | Development')
    .setColor('GREEN')
    		const orderButton = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('pingme')
					.setLabel('Ping me')
					.setStyle('PRIMARY')
        .setEmoji('🏓')
        .setDisabled(false),
                new MessageButton()
                .setLabel('Prices')
                .setURL('https://discord.com/channels/1025804828833746986/1025804829500657684/1034480306704617562')
                .setStyle('LINK')
                .setEmoji('<a:Money_Prices:1003184044110000230>')
        .setDisabled(false),
			);
    		const orderSelect = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('orderselect')
					.setPlaceholder('🔒| Nothing selected yet')
        .setDisabled(false)
					.addOptions([
						{
							label: 'ChatBot',
							description: '4 invites/1 boost',
							value: 'CHATBOT',
              emoji: '🤖',
						}
					]),
			);
    message.channel.send({ embeds: [ordermenu], components: [orderButton, orderSelect] })
  }
      }
});

// Creating the order tickets -

client.on('interactionCreate', async (interaction) => {
 if (interaction.isSelectMenu) {
    if (interaction.customId == 'orderselect') {
      //Regular Ticket
      if (interaction.values[0] === 'CLAN') {
        const user = interaction.user.id
        const claim = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('CLAIM')
          .setLabel('Claim the ticket')
          .setStyle('SUCCESS')
          .setEmoji('<a:yes:1032348720181817485>')
        );
          const ticketOpenmsg = new MessageEmbed()
          .setTitle('📃 Thanks for ordering a clan server | Please answer the questions below')
          .setDescription(`**Dear <@${user}>!**\n\n**Please could you answer these questions:**\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 1. What do you want the server name to be?**\n> *E.g. Clan Server*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 2. What should the server avatar be? If none, state none.**\n> *E.g. cdn.discordapp.com/attachements/.../...*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 3. What should the channel design be?**\n> *E.g \`💬 | general\`**\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 4. What should be the category design?**\n> *E.g. \`CATEGORY\`*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 5. What should the roles design be like?**\n> *E.g. OWNER*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 6. Are there any special wishes you would like?**\n> *What time would you want the server to be ready*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 7. What is the payment method?**\n> *6 invites/1 boost*`)
          const ticketOpenmsg2 = new MessageEmbed()
          .setTitle(`<a:loading:1034074800840253510> A Staff Member will claim the Ticket soon!`)
          .setDescription(`**Dear <@${user}>!**\n> This Ticket will be claimed by a Staff Member as soon as possible! In the meantime, please answer the questions above.\n\n> *He/She/They will help you then!*\n\n**Meanwhile, make sure to list us all information needed!**`)
          .setFooter('Thanks for choosing Electro | Development ✌️', client.user.displayAvatarURL())
          let supportRole = "1008051649681571875"
          let newsupportRole = "1018937502683385876"
 interaction.guild.channels.create(`📃・clan・${interaction.user.username}`, {
                    type: "GUILD_TEXT",
                    parent: "1034817138432684082",
     				topic: `${interaction.user.id}`,
            permissionOverwrites: [
            {
                id: interaction.user,
                allow: ["VIEW_CHANNEL"],
                deny: ["SEND_MESSAGES"]
            },
              {
                id: interaction.guild.roles.everyone,
                allow: [],
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
              },
                                {
                    id:`${supportRole}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
                {
                    id:`${newsupportRole}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
            ],
        }).then(channel => channel.send({ content: `<@${interaction.user.id}>\n> Staff Ping: <@&1018937502683385876> | <@&1008051649681571875>`, embeds: [ticketOpenmsg, ticketOpenmsg2], components: [claim] }))
      interaction.reply({ content: `Succecfully create you ticket!`, ephemeral: true })
      }
      // Community Server
      if (interaction.values[0] === 'COMMUNITY') {
          const user = interaction.user.id
        const claim = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('CLAIM')
          .setLabel('Claim the ticket')
          .setStyle('SUCCESS')
          .setEmoji('<a:yes:1032348720181817485>')
        );
          const ticketOpenmsg = new MessageEmbed()
          .setTitle('🎃 Thanks for ordering a community server | Please answer the questions below')
          .setDescription(`**Dear <@${user}>!**\n\n**Please could you answer these questions:**\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 1. What do you want the server name to be?**\n> *E.g. Clan Server*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 2. What should the server avatar be? If none, state none.**\n> *E.g. cdn.discordapp.com/attachements/.../...*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 3. What should the channel design be?**\n> *E.g \`💬 | general\`**\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 4. What should be the category design?**\n> *E.g. \`CATEGORY\`*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 5. What should the roles design be like?**\n> *E.g. OWNER*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 6. Are there any special wishes you would like?**\n> *What time would you want the server to be ready*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 7. What is the payment method?**\n> *6 invites/1 boost*`)
          const ticketOpenmsg2 = new MessageEmbed()
          .setTitle(`<a:loading:1034074800840253510> A Staff Member will claim the Ticket soon!`)
          .setDescription(`**Dear <@${user}>!**\n> This Ticket will be claimed by a Staff Member as soon as possible! In the meantime, please answer the questions above.\n\n> *He/She/They will help you then!*\n\n**Meanwhile, make sure to list us all information needed!**`)
          .setFooter('Thanks for choosing Electro | Development ✌️', client.user.displayAvatarURL())
                    let supportRole = "1008051649681571875"
          let newsupportRole = "1018937502683385876"
 interaction.guild.channels.create(`🎃・community・${interaction.user.username}`, {
                    type: "GUILD_TEXT",
                    parent: "1034817434508595230",
     				topic: `${interaction.user.id}`,
            permissionOverwrites: [
            {
                id: interaction.user,
                allow: ["VIEW_CHANNEL"],
                deny: ["SEND_MESSAGES"]
            },
              {
                id: interaction.guild.roles.everyone,
                allow: [],
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
              },
                                {
                    id:`${supportRole}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
                {
                    id:`${newsupportRole}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
            ],
        }).then(channel => channel.send({ content: `<@${interaction.user.id}>\n> Staff Ping: <@&1018937502683385876> | <@&1008051649681571875>`, embeds: [ticketOpenmsg, ticketOpenmsg2], components: [claim] }))
      interaction.reply({ content: `Succecfully create you ticket!`, ephemeral: true })
      }
      // Development Server -
       if (interaction.values[0] === 'DEV') {
        const user = interaction.user.id
        const claim = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('CLAIM')
          .setLabel('Claim the ticket')
          .setStyle('SUCCESS')
          .setEmoji('<a:yes:1032348720181817485>')
        );
          const ticketOpenmsg = new MessageEmbed()
          .setTitle('⚒️ Thanks for ordering a clan server | Please answer the questions below')
          .setDescription(`**Dear <@${user}>!**\n\n**Please could you answer these questions:**\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 1. What do you want the server name to be?**\n> *E.g. Clan Server*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 2. What should the server avatar be? If none, state none.**\n> *E.g. cdn.discordapp.com/attachements/.../...*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 3. What should the channel design be?**\n> *E.g \`💬 | general\`**\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 4. What should be the category design?**\n> *E.g. \`CATEGORY\`*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 5. What should the roles design be like?**\n> *E.g. OWNER*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 6. Are there any special wishes you would like?**\n> *What time would you want the server to be ready*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 7. What is the payment method?**\n> *6 invites/1 boost*`)
          const ticketOpenmsg2 = new MessageEmbed()
          .setTitle(`<a:loading:1034074800840253510> A Staff Member will claim the Ticket soon!`)
          .setDescription(`**Dear <@${user}>!**\n> This Ticket will be claimed by a Staff Member as soon as possible! In the meantime, please answer the questions above.\n\n> *He/She/They will help you then!*\n\n**Meanwhile, make sure to list us all information needed!**`)
          .setFooter('Thanks for choosing Electro | Development ✌️', client.user.displayAvatarURL())
                    let supportRole = "1008051649681571875"
          let newsupportRole = "1018937502683385876"
 interaction.guild.channels.create(`⚒️・dev・${interaction.user.username}`, {
                    type: "GUILD_TEXT",
                    parent: "1034817677664976956",
     				topic: `${interaction.user.id}`,
            permissionOverwrites: [
            {
                id: interaction.user,
                allow: ["VIEW_CHANNEL"],
                deny: ["SEND_MESSAGES"]
            },
              {
                id: interaction.guild.roles.everyone,
                allow: [],
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
              },
                                {
                    id:`${supportRole}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
                {
                    id:`${newsupportRole}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
            ],
        }).then(channel => channel.send({ content: `<@${interaction.user.id}>\n> Staff Ping: <@&1018937502683385876> | <@&1008051649681571875>`, embeds: [ticketOpenmsg, ticketOpenmsg2], components: [claim] }))
      interaction.reply({ content: `Succecfully create you ticket!`, ephemeral: true })
      }
   // Shop Server -
             if (interaction.values[0] === 'SHOP') {
        const user = interaction.user.id
        const claim = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('CLAIM')
          .setLabel('Claim the ticket')
          .setStyle('SUCCESS')
          .setEmoji('<a:yes:1032348720181817485>')
        );
          const ticketOpenmsg = new MessageEmbed()
          .setTitle('🔥 Thanks for ordering a shop server | Please answer the questions below')
          .setDescription(`**Dear <@${user}>!**\n\n**Please could you answer these questions:**\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 1. What do you want the server name to be?**\n> *E.g. Clan Server*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 2. What should the server avatar be? If none, state none.**\n> *E.g. cdn.discordapp.com/attachements/.../...*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 3. What should the channel design be?**\n> *E.g \`💬 | general\`**\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 4. What should be the category design?**\n> *E.g. \`CATEGORY\`*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 5. What should the roles design be like?**\n> *E.g. OWNER*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 6. Are there any special wishes you would like?**\n> *What time would you want the server to be ready*\n\n> **<a:Right_Arrow_Yellow:1003184037508161536> 7. What is the payment method?**\n> *6 invites/1 boost*`)
          const ticketOpenmsg2 = new MessageEmbed()
          .setTitle(`<a:loading:1034074800840253510> A Staff Member will claim the Ticket soon!`)
          .setDescription(`**Dear <@${user}>!**\n> This Ticket will be claimed by a Staff Member as soon as possible! In the meantime, please answer the questions above.\n\n> *He/She/They will help you then!*\n\n**Meanwhile, make sure to list us all information needed!**`)
          .setFooter('Thanks for choosing Electro | Development ✌️', client.user.displayAvatarURL())
          let supportRole = "1008051649681571875"
          let newsupportRole = "1018937502683385876"
 interaction.guild.channels.create(`🔥・shop・${interaction.user.username}`, {
                    type: "GUILD_TEXT",
                    parent: "1034817623847862272",
     				topic: `${interaction.user.id}`,
            permissionOverwrites: [
            {
                id: interaction.user,
                allow: ["VIEW_CHANNEL"],
                deny: ["SEND_MESSAGES"]
            },
              {
                id: interaction.guild.roles.everyone,
                allow: [],
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
              },
                {
                    id:`${supportRole}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
                {
                    id:`${newsupportRole}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
                
            ],
        }).then(channel => channel.send({ content: `<@${interaction.user.id}>\n> Staff Ping: <@&1018937502683385876> | <@&1008051649681571875>`, embeds: [ticketOpenmsg, ticketOpenmsg2], components: [claim] }))
      interaction.reply({ content: `Succecfully create you ticket!`, ephemeral: true })
             }
             if (interaction.values[0] === 'CHATBOT') {
        const user = interaction.user.id
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('CLAIM')
          .setLabel('Claim the ticket')
          .setStyle('SUCCESS')
          .setEmoji('<a:yes:1032348720181817485>'),
          new MessageButton()
          .setCustomId('BOTCREATION')
          .setLabel("Create Bot")
          .setStyle('DANGER')
          .setEmoji('🤖')
        );
          const ticketOpenmsg = new MessageEmbed()
               .setTitle('ChatBot Order')
               .setDescription(`**Greetings <${user}>,**\n\nThank you for ordering a Chat Bot! For the bot creation, you will need the following:\n> Bot Token\n> Bot status\n> Bot ID\n\n**You can get these stuff [**here**](https://discord.com/developers/applications)\n\nTo start, please click the button called \"Create Bot\"`)
               .setFooter(`Electro | Development`)
                    let supportRole = "1055513971496603678"
          let newsupportRole = "1055513983592960080"
 interaction.guild.channels.create(`🤖・chatbot・${interaction.user.username}`, {
                    type: "GUILD_TEXT",
                    parent: "1063178520555171930",
     				topic: `${interaction.user.id}`,
            permissionOverwrites: [
            {
                id: interaction.user,
                allow: ["VIEW_CHANNEL"],
                deny: ["SEND_MESSAGES"]
            },
              {
                id: interaction.guild.roles.everyone,
                allow: [],
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
              },
                                {
                    id:`${supportRole}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
                {
                    id:`${newsupportRole}`,
                    allow: ['VIEW_CHANNEL'],
                    deny: ['SEND_MESSAGES']
                },
            ],
        }).then((channel) => {
      channel.send({ content: `<@${interaction.user.id}>\n> Staff Ping: <@&1055513983592960080>/<@&1055513971496603678>`, embeds: [ticketOpenmsg], components: [buttons] })
      interaction.reply({ content: `Successfully created your ticket: <#${channel.id}>`, ephemeral: true })
      })
     }
    }
 }
})

//Help Interactions -
client.on('interactionCreate', async (i) => {
    if(i.isButton) {
        if(i.customId == 'NEXT') {
            const helpNext1 = new MessageEmbed()
            .setTitle(`Information Commands`)
            .addFields(
            { name: `\`,ping\``, value: 'Checks the ping of bot.' },
            { name: `\`,help\``, value: 'Dashboard of the Bot Manager.'},
            { name: `\`,avatar\``, value: 'Avatar command'}
            )
            .setFooter('Page: 2/4')
            .setTimestamp()
                  const helpButtons2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('BACK1')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME1')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT1')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
            i.update({ embeds: [helpNext1], components: [helpButtons2] })
        }
    }
    if(i.isButton) {
        if(i.customId == 'BACK1') {
            const helpBack1 = new MessageEmbed()
            .setTitle('Owner Commands')
            .addFields(
            { name: `\`,eval\``, value: `Eval command`, inline: true },
            { name: `\`,restartbot\``, value: `Restarts the bot!`, inline: true },
            { name: `\`,closeall\``, value: `Deletes all the closed ticket.`, inline: true}
            )
            .setFooter('4/4')
            .setTimestamp()
            const helpButtons3 = new MessageActionRow()
         .addComponents(
        new MessageButton()
        .setCustomId('BACK2')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME2')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT2')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
        i.update({ embeds: [helpBack1], components: [helpButtons3] })
    }
    }
    if(i.isButton) {
        if(i.customId == 'NEXT1') {
            const helpNext2 = new MessageEmbed()
            .setTitle('Ticket Commands')
            .addFields(
            { name: `\`,close\``, value: `Closes the ticket.`, inline: true },
            { name: `\`,setmod\``, value: `Sets the ticket for Moderator+.`, inline: true },
            { name: `\`,setimportant\``, value: `Sets the ticket as important.`, inline: true },
            { name: `\`,setowner\``, value: `Sets the ticket for Co-owner/Owner+.`, inline: true },
            { name: `\`,setdevil\``, value: `Sets the ticket for Devill.`, inline: true },
            { name: `\`,setfinished\``, value: `Sets the ticket as finished.`, inline: true },
            { name: `\`,createbot\``, value: `Starts the creation of the bot.`, inline: true },
            )
            .setFooter('Page 4/4')
            .setTimestamp()
            const helpButtons3 = new MessageActionRow()
        .addComponents(
        new MessageButton()
        .setCustomId('BACK3')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME2')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT3')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
            i.update({ embeds: [helpNext2], components: [helpButtons3] })
        }
    }
       if(i.isButton) {
        if(i.customId == 'NEXT3') {
           const helpNext3 = new MessageEmbed()
            .setTitle('Owner Commands')
            .addFields(
            { name: `\`,eval\``, value: `Eval command`, inline: true },
            { name: `\`,restartbot\``, value: `Restarts the bot!`, inline: true },
            { name: `\`,closeall\``, value: `Deletes all the closed ticket.`, inline: true}
            )
            .setFooter('4/4')
            .setTimestamp()
            const helpButtons3 = new MessageActionRow()
        .addComponents(
        new MessageButton()
        .setCustomId('BACK4')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME4')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT4')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
            i.update({ embeds: [helpNext3], components: [helpButtons3] })
        }
    }
       if(i.isButton) {
        if(i.customId == 'NEXT4') {
       const helpEmbed5 = new MessageEmbed()
      .setAuthor(`Requested by ${i.user.tag} | Page: Home`)
      .setDescription(`Welcome to Electro | Development, I have only have prefix commands and soon I will have slash commands :D\nCurrent Developers:\n\`dxlz#9841\`\n\`AudiRo#7652\`\n\nYou can navigate the pages by clicking "Back" or "Next". To go home, simply click "Home".`)
      .setFooter('Page: 1/4')
            const helpButtons3 = new MessageActionRow()
        .addComponents(
        new MessageButton()
        .setCustomId('BACK1')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME1')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT1')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
            i.update({ embeds: [helpEmbed5], components: [helpButtons3] })
        }
    }
       if(i.isButton) {
        if(i.customId == 'HOME1') {
      const helpEmbed = new MessageEmbed()
      .setAuthor(`Requested by ${i.user.tag} | Page: Home`)
      .setDescription(`Welcome to Electro | Development, I have only have prefix commands and soon I will have slash commands :D\nCurrent Developers: \`Devill#0001\`\n\nYou can navigate the pages by clicking "Back" or "Next". To go home, simply click "Home".`)
      .setFooter('Page: 1/3')
      const helpButtons1 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('BACK')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
            i.update({ embeds: [helpEmbed], components: [helpButtons1] })
        }
    }
         if(i.isButton) {
        if(i.customId == 'HOME2') {
      const helpEmbed = new MessageEmbed()
      .setAuthor(`Requested by ${i.user.tag} | Page: Home`)
      .setDescription(`Welcome to Electro | Development, I have only have prefix commands and soon I will have slash commands :D\nCurrent Developers: \`Devill#0001\`\n\nYou can navigate the pages by clicking "Back" or "Next". To go home, simply click "Home".`)
      .setFooter('Page: 1/3')
      const helpButtons1 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('BACK')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
            i.update({ embeds: [helpEmbed], components: [helpButtons1] })
        }
    }
         if(i.isButton) {
        if(i.customId == 'HOME3') {
      const helpEmbed = new MessageEmbed()
      .setAuthor(`Requested by ${i.user.tag} | Page: Home`)
      .setDescription(`Welcome to Electro | Development, I have only have prefix commands and soon I will have slash commands :D\nCurrent Developers: \`Devill#0001\`\n\nYou can navigate the pages by clicking "Back" or "Next". To go home, simply click "Home".`)
      .setFooter('Page: 1/3')
      const helpButtons1 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('BACK')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
            i.update({ embeds: [helpEmbed], components: [helpButtons1] })
        }
    }
         if(i.isButton) {
        if(i.customId == 'HOME4') {
      const helpEmbed = new MessageEmbed()
      .setAuthor(`Requested by ${i.user.tag} | Page: Home`)
      .setDescription(`Welcome to Electro | Development, I have only have prefix commands and soon I will have slash commands :D\nCurrent Developers: \`Devill#0001\`\n\nYou can navigate the pages by clicking "Back" or "Next". To go home, simply click "Home".`)
      .setFooter('Page: 1/3')
      const helpButtons1 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('BACK')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
            i.update({ embeds: [helpEmbed], components: [helpButtons1] })
        }
    }
         if(i.isButton) {
        if(i.customId == 'HOME5') {
      const helpEmbed = new MessageEmbed()
      .setAuthor(`Requested by ${i.user.tag} | Page: Home`)
      .setDescription(`Welcome to Electro | Development, I have only have prefix commands and soon I will have slash commands :D\nCurrent Developers: \`Devill#0001\`\n\nYou can navigate the pages by clicking "Back" or "Next". To go home, simply click "Home".`)
      .setFooter('Page: 1/3')
      const helpButtons1 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('BACK')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
            i.update({ embeds: [helpEmbed], components: [helpButtons1] })
        }
    }
       if(i.isButton) {
        if(i.customId == 'BACK2') {
           const helpBack = new MessageEmbed()
            .setTitle('Ticket Commands')
            .addFields(
            { name: `\`,close\``, value: `Closes the ticket.`, inline: true },
            { name: `\`,setmod\``, value: `Sets the ticket for Moderator+.`, inline: true },
            { name: `\`,setimportant\``, value: `Sets the ticket as important.`, inline: true },
            { name: `\`,setowner\``, value: `Sets the ticket for Co-owner/Owner+.`, inline: true },
            { name: `\`,setdevil\``, value: `Sets the ticket for Devill.`, inline: true },
            { name: `\`,setfinished\``, value: `Sets the ticket as finished.`, inline: true },
            { name: `\`,createbot\``, value: `Starts the creation of the bot.`, inline: true },
            )
            .setFooter('Page 4/4')
            .setTimestamp()
            const helpButtonsBack = new MessageActionRow()
        .addComponents(
        new MessageButton()
        .setCustomId('BACK3')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME2')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT3')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
            i.update({ embeds: [helpBack], components: [helpButtonsBack] })
        }
    }
           if(i.isButton) {
        if(i.customId == 'BACK4') {
     const helpEmbed = new MessageEmbed()
      .setAuthor(`Requested by ${i.user.tag} | Page: Home`)
      .setDescription(`Welcome to Electro | Development, I have only have prefix commands and soon I will have slash commands :D\nCurrent Developers: \`Devill#0001\`\n\nYou can navigate the pages by clicking "Back" or "Next". To go home, simply click "Home".`)
      .setFooter('Page: 1/3')
      const helpButtons1 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('BACK')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
            i.update({ embeds: [helpEmbed], components: [helpButtons1] })
        }
    }
           if(i.isButton) {
        if(i.customId == 'BACK2') {
            const helpNext1 = new MessageEmbed()
            .setTitle(`Information Commands`)
            .addFields(
            { name: `\`,ping\``, value: 'Checks the ping of bot.' },
            { name: `\`,help\``, value: 'Dashboard of the Bot Manager.'},
            { name: `\`,avatar\``, value: 'Avatar command'}
            )
            .setFooter('Page: 2/4')
            .setTimestamp()
                  const helpButtons2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('BACK3')
        .setLabel('Back')
        .setStyle('PRIMARY')
        .setEmoji('<a:leftarrow:1034182052121149510>'),
        new MessageButton()
        .setCustomId('HOME1')
        .setLabel('Home')
        .setStyle('SUCCESS')
        .setEmoji('🏘️'),
        new MessageButton()
        .setCustomId('NEXT1')
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setEmoji('<a:rightarrow:1034167067152240660>')
      );
            i.update({ embeds: [helpNext1], components: [helpButtons2] })
        }
    }
})

// Setup verify -

client.on('messageCreate', async (message) => {
            if(message.content == ',setup-rules') {
    if(message.author.id == '848185810741493810') {
        // Part 1 -
        message.channel.send(`**__Welcome to Electro | Development @everyone__**\n**Make sure to read the rules!**\n\n**Rule §001:**\n> __Always be kind and never bully someone.__\n> *This means you may not say bad-/swear-words, not laugh over Profile-Pictures or Names and not laugh about someones acting or \"not knowing something\"*\n\n**Rule §002:**\n> __Don't Spam Text, Caps, Emoji, Links, Images or Stickers.__\n> *This means you may not send (duplicated) Text quickly and may not send just Images, Stickers or Emojis out of context.*\n\n**Rule §003:**\n> __Use Bots in the dedicated Channel__\n> *If you want to use a Bot, then use the Bot-Commands Channel in the commands area.*\n\n> **Rule §004:**\n> __Do not Spam Orders or Tickets, check out <#1037003131445325916> first!__\n> *This also applies the Ping when replying! To fix this deactivate or hold shift. You may ping Staff in Tickets after HOURS of no response. Every ping is first verbally warned. You may ping people, if they allowed you to \(same for staff\)*\n\n> **Rule §006:**\n> __Promotion is not allowed.__\n> *You are not allowed to promote your servers/websites or anything else like that.*\n> *Doing that will lead to a warning then mute.*\n> *You can only promote in the dedicated channels.*\n\n**Rule §007:**\n> __Do not beg for servers.__\n> *Just don't or you will get muted.*`)
        // Part 2 -
        message.channel.send(`**Rule §008:**\n> __No Voice Trolling and Channel Hopping!__\n> *You may not randomly scream or play audios in Audio Channels because that's not allowed. Also jumping in a Voice Channel and leaving or trolling with BOT-MUSIC-COMMANDS is not allowed.*\n\n**Rule §009:**\n> __Always read the pinned Messages first, before Asking Something.__\n> *Most of the Times, very important / helpful stuff is in the PINS of a Channel, check them out, before re-asking something!*\n\n> **Rule §010:**\n> __Alts are not allowed.__\n> *Please do not add an alt unless you really need to becuase your main account is hacked. If you are caught using an alt, you will be banned.*\n\n**AUTOMATED SECURITY SYSTEM**\n> *It mutes you after X BAD ACTIONS. \(spam, mass mention, 65%+ Caps, etc.\)*\n\n**YOU SHOULD GET YOUR <@&1055513986965184583> ROLE AUTOMATICALLY, DM A STAFF MEMBER!**\n\n> *The rules are changing soon*`)
    }
            }
})

//Setup Welcome in general -

client.on('guildMemberAdd', async (message) => {
   member.guild.channels.cache.find(i => i.name === 'join-logs').send(
    `${member.user.tag} has joined the server!`
    )
    console.log('A new user has just joined the server!')
})

//Check invites -

client.on('messageCreate', async (message) => {
    if(message.content == ',invites') {
                var user = message.author;

        message.guild.invites.fetch()
        .then

        (invites =>
            {
            let filter = m => m.author.id === message.author.id;
                const userInvites = invites.values().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                for(var i=0; i < userInvites.length; i++)
                {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
       const inviteEmbed = new MessageEmbed()
        .setTitle(`You have ${userInviteCount} invites`)
                     message.reply({ embeds: [inviteEmbed] });
            }
        )
    }
})

//Eval

client.on("messageCreate", async (message) => {
 if (message.content.startsWith(",eval")) {
  if (message.author.id == "848185810741493810") {
        var result = message.content.split(" ").slice(1).join(" ")
   message.delete()
        let evaled = eval(result);
        console.log('Eval: ' + result)
  } else {
       message.reply(':x: You are not allowed to use the eval command!\nYou need to be <@848185810741493810> to use this command.')
  }
 }
});

//Create server command

client.on('messageCreate', async (message) => {
  if(message.content == ',create') {
        if (!isValidTicket(message.channel)) return message.channel.send({
                embeds: [new MessageEmbed()
                    .setColor("RED")
                    .setTitle("This channel isn't a Ticket")
                  
                ]
            });
    message.delete()
    const embed1 = new MessageEmbed()
      .setColor('GREEN')
      .setFooter('Electro | Development')
    .setTitle('Electro Development')
    .setDescription(`**Hello __<@${message.author.id}>__,**\n**To create a bot, please go through the modal system. If you are having any difficulties, please see <#1059508085565169784>!**\n> <@${message.author.id}> is creating a bot for <@${message.channel.topic}>\n\n> *To create a Bot press the \"Create Server\" Button.*`)
    const button1 = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId('SERVERCREATION')
      .setLabel('Create Server')
      .setStyle('SUCCESS')
        );
   message.channel.send({ embeds: [embed1], components: [button1] })
  }
})

client.on('interactionCreate', async (i) => {
  if(!i.isButton()) {
    if(i.customId == 'BOTCREATION') {
            const modal = new Modal()
      .setCustomId('modal-system')
      .setTitle('title of modal')
      .addComponents([
      new MessageActionRow().addComponents(
       new TextInputComponent()
      .setCustomId('id1')
            .setLabel("question 1")
            .setStyle('SHORT'),
        ),
     new MessageActionRow().addComponents(
       new TextInputComponent()
      .setCustomId('id2')
      .setLabel('question 1')
      .setStyle("SHORT"),
        )
      ])
      await i.showModal(modal)
    }
  }
});           

//More set commands

client.on('messageCreate', async (m) => {
  if(m.content == ',acceptstaff') {
     if (
            m.member.roles.cache.some(
              (role) => role.id === "1055511778219536552"
            )
)
      //Check if the channel is defined as isValidTicket, Otherwise, pop up the error
    if (!isValidTicket(m.channel)) return m.channel.send({
                embeds: [new MessageEmbed()
                    .setColor("RED")
                    .setTitle("This channel isn't a Ticket")
                  
                ]
            });
    m.delete()
            const setfinishedButtons = new MessageActionRow()
        .addComponents(
        new MessageButton()
            .setCustomId('CLOSE')
            .setLabel('Close Ticket')
            .setStyle('DANGER')
        );
        //Sends the message -
            let emoji = "✅"
    let name = m.channel.name
        m.channel.setName(`${name.slice(0, name.indexOf("・") - 1)}${emoji}${name.slice(name.indexOf("・"))}`)
    m.channel.send({ content: `**Greetings <@${m.channel.topic}>,**\n\nWe have reviewed your application and decided to accept you as a staff member. You are a <@&1055513983592960080>, if you need help, you can refer to <#1055510271881400402>. Please also make sure to read the <#1055510254894452737>.\n\nI hope you will have a great time at **Electro | Development**! If you want to close this ticket, please press close.\n\nKind Regards,\n> Electro | Development`, components: [setfinishedButtons] })
    
  }
})

client.login(config.token);
