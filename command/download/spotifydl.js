export default {
    command: ["spotifydl", "dlspotify"],
    description: "Download spotify audio/song using link",
    name: "spotifydl",
    tags: "download",

    run: async (m) => {
        const link = toString(m.args[0]);
        const apikey = global.APIKeys.neoxr;
        let response;

        if (!link || !link.startsWith("https://soundcloud.com")) return m.reply("\`\`\`Make sure you put soundcloud link\`\`\`");

        m.reply(global.msg.dlloading);

        const API = `${global.APIs.neoxr + "/api/spotify?url=" + encodeURIComponent(link) + "&apikey=" + apikey}`;

        try {
            response = await func.fetchJson(API);
        } catch (error) {
            console.error(error);
        };

        let { thumbnail, title, artist, duration, url } = response.data;

        const txt = `
Title: ${title}
Artist: ${artist.name}
Duration: ${duration}
`;

        try {
            await m.reply(thumbnail, { caption: txt, mimetype: "image/jpeg"});
            await m.reply(url, { mimetype: "audio/mpeg"});
        } catch (error) {
            console.error(error);
            m.reply("\`\`\`ERROR\`\`\`");
        };
    },
};