export default {
    command: ["facebook", "fbdl", "fbv", "fb"],
    description: "Download facebook video",
    name: "fbdl",
    tags: "download",

    run: async (m, { conn }) => {
        
        const Url = m.args[0];
        const apikeys = global.APIKeys.neoxr;

        m.reply(global.msg.dlloading);

        if (!Url) return setTimeout(() => { m.reply(`\`\`\`Example: ${m.prefix + m.command} https://www.facebook.com/reel/986009916077834?mibextid=xCPwDs&s=yWDuG2&fs=e\`\`\``); }, 1000);

            const cekUrl = /https:\/\/(www\.)?facebook\.com\/.*/;

            const match = Url.match(cekUrl);

            if (!match) return m.reply("Make sure you put a Facebook URL, not the other URL!");

        const ApiUrl = `${global.APIs.neoxr + "/api/fb?url=" + encodeURIComponent(Url) + "&apikey=" + apikeys}`;

        console.log(ApiUrl);
        let response;

        try {
            response = await func.fetchJson(ApiUrl);
        } catch (error) {
            console.error(error);
        };

        console.log(response);

        if (m.args[1] === '--hd') {
            let url = response.data[1].url;

            if (url == false) return m.reply("error, Make sure you put a correct url/link!");
            let sendFile = url;

            try {
                await m.reply( sendFile, { caption: "Done" });
            } catch (err) {
                m.reply("There was a slight problem while sending the video.");
                console.error(err);
            };
        }
        if (m.args[1] === '--sd') {
            let url = response.data[0].url;

            console.log(url);

            if (url == false) return m.reply("error, Make sure you put a correct url/link!");
            let sendFile = url;

            try {
                await m.reply( sendFile, { caption: "Done" });
            } catch (err) {
                m.reply("There was a slight problem while sending the video.");
                console.error(err);
            };
    } else {
            let url = response.data[0].url

            if (url)

            console.log(url);
    
            let sendFile = url;
    
            try {
                await m.reply( sendFile, { caption: "Done\n\n*Note*:\n`If you want to change the resolution of this video, try adding '--hd/sd' after you paste the link you copied, if you don't add it then it will be download the video in SD quality (following the default)`" }, wm);
            } catch (err) {
                m.reply("There was a slight problem while sending the video.");
                console.error(err);
            };
    };
},
};
