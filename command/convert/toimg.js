export default {
    command: ["toimg"],
    description: "Convert sticker to image",
    name: "toimg",
    tags: "convert",
    
    loading: true,
    
    run: async (m) => {
        if (!m.quoted || m.quoted.mime !== "image/webp") return setTimeout(() => { m.reply("\`\`\`Reply a sticker image\`\`\`"); }, 1000);
        const video = await m.quoted.download();

        try {
            await m.reply(video, {mimetype: "image/jpeg"});
        } catch (err) {
            m.reply("Error");
            console.log(err);
        };
    },
};
