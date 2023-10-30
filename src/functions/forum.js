
const { fetchData, updateForumId } = require('./getsheets')
const { channel, threads } = require('discord.js');

async function updateForum(forumId) {
    /**
     * 
     * @param {ExtendedClient} client 
     */

    const data = await fetchData(); // Fetch data from Google Sheets
    if (data) {
        /*  for (const item of data) {
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
             const imageUrl = item[10]; // Replace with the specific image URL
 
             if (Array.isArray(item)) {
                 const contentArr = `${vn}\nINFO\n•  Size: ${size}\n• ${software}\n• ${os}\n--------------------------------------------------------------------------------------\n🔥 [GET HERE](${download})`;
 
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
               
             } else {
                 console.error('Invalid item:', item);
             }
         } */
        /* --devtest */

        const status = data[1][0];
        const name = data[1][1];
        const version = data[1][2];
        const os = data[1][3];
        const software = data[1][4];
        const size = data[1][5];
        const download = data[1][6];
        const en = data[1][7];
        const vn = data[1][8];

        const threadName = name;
        const imageUrl = data[1][10]; // Replace with the specific image URL


        if (Array.isArray(data[1])) {
            const contentArr = `${vn}\nINFO\n• Size: ${size}• ${software}• ${os}\n--------------------------------------------------------------------------------------\n 🔥[GET HERE](${download})`;

            thread = await forumId.threads.create({
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
            },);

            thread.send(`• ${version}`).catch(console.error);
            console.log("done up post");

            const threadId = thread.id;
            updateForumId('A1', threadId)
        }

    }
}

module.exports = {
    updateForum,
};