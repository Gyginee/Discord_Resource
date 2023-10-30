
const { fetchData, updateForumId } = require('./getsheets')

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function updateForum(forumId) {
    /**
     * 
     * @param {ExtendedClient} client 
     */

    const data = await fetchData(); // Fetch data from Google Sheets
    if (data) {
        let i = 2;
        let firstItemSkipped = false; // Tạo một biến để xác định xem đã bỏ qua phần tử đầu tiên hay chưa
        for (const item of data) {
            if (!firstItemSkipped) {
                firstItemSkipped = true;
                continue; // Bỏ qua việc xử lý cho phần tử đầu tiên
            }

            const discordId = item[0];
            const name = item[1];
            const version = item[2];
            const os = item[3];
            const software = item[4];
            const size = item[5];
            const download = item[6];
            const en = item[7];
            const vn = item[8];
            const author = item[9];
            const imageUrl = item[10]; // Replace with the specific image URL

            const threadName = name;
            //console.log(imageUrl);
            if (Array.isArray(item)) {
                const contentArr = `${vn}\nINFO\n•  Size: ${size}\n• ${software}\n• ${os}\n--------------------------------------------------------------------------------------\n🔥 [GET HERE](${download})`;
                const embeds = [];
                if (imageUrl && imageUrl !== '' && imageUrl !== 'Loading...' && imageUrl !== 'Đang tải...' && imageUrl !== '#N/A' && imageUrl !== '#VALUE!') {
                    embeds.push({
                        image: {
                            url: imageUrl,
                        },
                    });
                } else {
                    embeds.push({
                        image: {
                            url: 'https://cdn.discordapp.com/attachments/1154392823966208111/1165349160027967628/standard_2.gif?ex=654fc17a&is=653d4c7a&hm=edc33672e21539e17721b1a596700d72472c87c6b1f5d1c7da91dc1fb905b3eb&',
                        },
                    });
                }
                thread = await forumId.threads.create({
                    name: threadName,
                    message: {
                        content: contentArr,
                        embeds: embeds,
                    },
                    appliedTags: ['1', '2'],
                },);

                thread.send(`• ${version}`).catch(console.error);


                const threadId = thread.id;
                const cell = `A${i}`
                updateForumId(cell, threadId)
                i++;

                // Nếu index chia hết cho 15 và không phải là phần tử cuối cùng, thì tạo một độ trễ
                if ((index + 1) % 15 === 0 && index !== data.length - 1) {
                    await delay(2000); // Đợi 2 giây
                }
            } else {
                console.error('Invalid item:', item);
            }
        }
        console.log("done up post");

        /* --devtest */

        /* const status = data[1][0];
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
            updateForumId('A2', threadId)
        } */

    }
}

module.exports = {
    updateForum,
};