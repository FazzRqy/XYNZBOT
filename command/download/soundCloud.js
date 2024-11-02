export default {
    command: ["soundclouddl", "soundcloud", "scdl"],
    description: "Download audio on soundCloud",
    name: "soundcloud",
    tags: "download",

    run: async (m) => {
        const URL = m.args[0];
        const apikey = global.APIKeys.neoxr;
        const scRegex = /https:\/\/(www\.)?soundcloud\.com\/.*/
        let response;

        if (!URL || scRegex !== URL) return m.reply(`Put a soundCloud url. Example: ${m.prefix + m.command} *SoundCloud url*`);

        m.reply(global.msg.dlloading);

        const API = `${global.APIs.neoxr + "/api/soundcloud?url=" + encodeURIComponent(URL) + "&apikey=" + apikey}`;

        try {
            response = await func.fetchJson(API);
        } catch (error) {
            console.error(error);
        };

        const { url, title, author, imageURL } = response.data;

        const txt = `
Title: ${title}
Username author: ${author.username}
Verified: ${author.verified}
Country Code: ${author.country_code}
`;

        try {
            await m.reply(imageURL, { caption: txt, mimetype: "image/jpeg" });
            await m.reply(url, { mimetype: "audio/mpeg"});
        } catch (error) {
            console.error(error);
            m.reply("\`\`\`ERROR\`\`\`");
        };
    },
};