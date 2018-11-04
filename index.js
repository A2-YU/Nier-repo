const Discord = require('discord.js');
const client = new Discord.Client();
const math = require('mathjs');
var myargs = ['coucou','Bonsouar','Bonswer','Bonjour','wsh','wesh','Yo','hi','hello','slt','salut','salutation","hola',"Kon'nichiwa"]



var prefix = '>';

client.on("ready", () => {
    console.log('connexion.........')
    setInterval(function() {
        let allgame = ['A2 best master ever', `${prefix}help | serving ${client.guilds.size} servers`, 'OwO', `${client.users.size} users`]
        let gameon = allgame[Math.floor(Math.random()*allgame.length)]
        client.user.setGame(gameon, 'https://www.twitch.tv/monstercat');
    }, 45000)
    console.log('connexion établie')
    console.log('connecté en tant que ' + client.user.tag)
    console.log('ID | ' + client.user.id)
})

client.on('message', message => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const argsts = message.content.split().shift().toLowerCase();
const command = args.shift().toLowerCase();
    
if(argsts === 'slt' | argsts === 'cc' | argsts === 'yosh' | argsts === 'bjr'){
    return message.channel.send('Yo')
}
let user = message.mentions.users.first();
var author; // mention to get avatar
if (command === `avatar`){
    if(user){
        var author = user;

        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(`${author.username}'s avatar`)
        .setImage(user.displayAvatarURL)
        return message.channel.send(embed)

    } else {
        var author = message.author;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription("Your avatar")
        .setImage(author.displayAvatarURL)
        return message.channel.send(embed)
    }

}
let calcul = args.join(' ');
if(command === 'calc'){
    try{
        let mathc = math.eval(calcul);
    if(!mathc){
        return message.channel.send('```>calc 1+1 | or other calcul```')
    } else{
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setTitle('I\'m enough smart to know the result UwU')
        .addField('Input', `\`\`\`${calcul}\`\`\``)
        .addField('Output', `\`\`\`${mathc}\`\`\``)
        message.channel.send(embed)
    }
    } catch (error) {
        message.channel.send("It won't work")
        console.log(error)
    }
    
}

if (message.content.includes(myargs)) {
    message.channel.send('Yo')
}
  


let vcscontent = args.join(' ');

if(command === 'mts'){
    try{
    
    let embed = new Discord.RichEmbed()

    .setColor('RANDOM')
    .setAuthor(message.author.tag)
    .setThumbnail(message.author.displayAvatarURL)
    .addField('Message', vcscontent)
    .addField('From server', `${message.guild.name} with ID | \`${message.guild.id}\``, true)
    .addField('From channel', message.channel.name, true)
    .setTimestamp()
    .setFooter('Received at')

    var sendm = 0;
   // while(sendm<client.channels.find('name', 'mts')){
    client.channels.find('name', 'mts').send(embed)
   // sendm++
   // }
} catch (error) {
    return
}
}

if(command === 'invite'){
    let user = message.author;
    let embed = new Discord.RichEmbed()

    .setColor('RANDOM')
    .setDescription(`Here there's all the stuff to invite me, ${user.username}`  )
    .setThumbnail(client.user.displayAvatarURL)
    .addField('Invite me', `[invitation to your server](https://discordapp.com/oauth2/authorize?&client_id=`+ client.user.id + `&scope=bot&permissions=8)`)
    return message.channel.send(embed)
}

if(message.content === '<@505048171718901770>'){
    return message.channel.send(`My prefix is \`${prefix}\``)
}

if(command === 'help'){
    return message.channel.send('```>help | show this panel\n\n>avatar (user) | show an avatar\n\n>calc (1+1) | :3 you already know\n\n'+
    '>mts | speak with others users trough servers (in dvp)```')
}

if(command === 'eval'){

    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
    
          if(message.author.id !== "378879176515780619") return;
          try {
            const code = args.join(" ");
            let evaled = eval(code);
       
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
       
            message.channel.send(clean(evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
}


})


client.login('NTA1MDQ4MTcxNzE4OTAxNzcw.Dr53Mw.wGBPKgCSjyKhGkDinmJd8HXcp9Q')