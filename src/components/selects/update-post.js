const { StringSelectMenuInteraction } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');
const { fetchData } = require('../../functions/getsheets')


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
        const data = await fetchData(); // Fetch data from Google Sheets

        if (data) {
            for (const item of data) {
                const status = item[0];
                const name = item[1];
                const version = item[2];
                const os = item[3];
                const software = item[4];
                const size = item[5];
                const download = item[6];
                const en = item[7];
                const vn = item[8];

                const threadName = name;
                const imageUrl = "https://vn-test-11.slatic.net/p/33d7ece76741ca57a9281d7a4f7bbd1a.jpg"; // Replace with the specific image URL

                if (Array.isArray(item)) {
                    const contentArr = `${vn}\nINFO\n•  Size: ${size}\n• ${software}\n• ${os}\n--------------------------------------------------------------------------------------\n[🔥 GET HERE] ( ${download})`;

                    editChannel.threads.create({
                        name: threadName,
                        message: {
                            content: contentArr,
                            embeds: [
                                {
                                    image: {
                                        url: imageUrl,
                                    },
                                },
                            ],
                        },
                        appliedTags: ['1', '2'],
                    });
                    client.channels.fetch(editChannel)
                    .then(channel=>channel.send(`• Version: ${version} - `))
                } else {
                    console.error('Invalid item:', item);
                }
            }
            console.log("done up post")
        } else {
            console.error('Data fetch failed.');
        }
    }
};
