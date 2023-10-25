const { ChatInputCommandInteraction, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');


module.exports = {
    structure: new SlashCommandBuilder()
        .setName('update-post')
        .setDescription('Update Posts from Sheet (admin only).'),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {

        await interaction.reply({
            content: 'Chọn kênh update Posts.',
            components: [
                new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('update-post')
                        .setPlaceholder('Select Channel Update')
                        .addOptions(
                            { label: 'Edit', value: 'edit' },
                            { label: 'Draw', value: 'draw' },
                            { label: 'Effect', value: 'effect' },
                            { label: '3D', value: '3d' },
                            { label: 'Dev', value: 'dev' },
                            { label: 'OpenAI', value: 'ai' },
                            { label: 'Course', value: 'course' },
                            { label: 'hot', value: 'hot' },
                            { label: 'Design', value: 'design' },
                        )
                )
            ]
        });

    }
};
