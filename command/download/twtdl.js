export default {
    command: ["twtv", "xv", "twti", "xi"],
    description: "download video/image twitter",
    name: "twti / twtv",
    tags: "download",

    run: async (m) => {
        const urltwt = m.args[0];

        if (!urltwt) {
            m.reply(`Example: ${m.prefix + m.command} <link posts> image/video`);
        } else {
            let cekUrl = /https:\/\/(www\.)?(twitter|x)\.com\/.*/

            let match = urltwt.match(cekUrl)
            
            if (!match) throw "Make sure you put the url correcly!"
        if (m.args[1] == "video") {
            m.reply(global.msg.dlloading)
            let urlApi = `${global.APIs.neoxr + "/api/twitter?url=" + encodeURIComponent(urltwt) + "&apikey=" + global.APIKeys.neoxr}`;

            let response;
    
            try {
                response = await func.fetchJson(urlApi);
            } catch (error) {
                console.error(error);
            };
    
            let get = response.data;
            try {
                await m.reply(get.url, {caption: "Done", mimetype: "video/mp4"});
            } catch (error) {
                console.error(error);
                m.reply(error);
            };
        } else if (m.args[1] == "image") {
            let urlApi = `${global.APIs.neoxr + "/api/twitter?url=" + encodeURIComponent(urltwt) + "&apikey=" + global.APIKeys.neoxr}`;

            let response;
    
            try {
                response = await func.fetchJson(urlApi);
            } catch (error) {
                console.error(error);
            };
    
            let get = response.data;
            try {
                await m.reply(get.url, {caption: "Done", mimetype: "image/jpeg"});
            } catch (error) {
                console.error(error);
                m.reply(error);
            };
        } else {
            m.reply("try to add video/image after you paste the link!");
        };
    }
    },
};