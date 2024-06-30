const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Earl`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `woznyuk`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `WoznyukCommunity`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `https://bio.site/Earlpolloso`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
