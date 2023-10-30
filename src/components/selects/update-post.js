const { StringSelectMenuInteraction } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');
const { updateForum } = require('../../functions/forum')



module.exports = {
    customId: 'update-post',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {StringSelectMenuInteraction} interaction 
     */
    run: async (client, interaction) => {
        interaction.reply({ content: 'Updating...!', ephemeral: true })

       // const value = interaction.values[0];
        updateForum(client.channels.cache.get(process.env.EDITPOST_ID));
       
    }
};
