const { StringSelectMenuInteraction } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');
const SheetClient = require('../../functions/GetSheet')


module.exports = {
    customId: 'update-post',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {StringSelectMenuInteraction} interaction 
     */
    run: async (client, interaction) => {
        const editChannel = client.channels.cache.get(process.env.EDITPOST_ID)

        const value = interaction.values[0];
        const text = SheetClient;
        console.log(SheetClient);
  
        const info = "INFO: \n •  Size: 34,5 MB \n • After Effects/Adobe Premiere Pro  \n • Window/MacOs";
        const url = "[Get Here] https://google.com";

        const contentArr = text + "\n" + info + "\n" + url;
        await editChannel.threads.create({
            name: 'Post name',
            message: {
                content: contentArr,
                embed: {
                    img: {
                        url: "https://media.discordapp.net/attachments/1164920614256136234/1164920614503596126/blace-thumb.jpg?ex=6544f7dd&is=653282dd&hm=c3599791e2a6d4bc2e063657b0ed6651e71765c7dce14304c6e184e0d2fdfb32&=&width=484&height=193",
                    }
                }
            },
            appliedTags: ['1', '2']
        });

    }
};
