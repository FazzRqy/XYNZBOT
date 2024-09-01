export default {
    command: ["facebook", "fbdl", "fbv", "fb"],
    description: "Download facebook video",
    name: "fbdl",
    tags: "download",

    run: async (m, { conn }) => {
        
        const Url = m.args[0]
        const apikeys = global.APIKeys.neoxr

        if (!func.isUrl(Url))
        return m.reply(
            `Invalid URL\n\nContoh: ${m.prefix + m.command} https://www.facebook.com/reel/986009916077834?mibextid=xCPwDs&s=yWDuG2&fs=e`,
        );
        
        const ApiUrl = `https://api.neoxr.eu/api/fb?url=${encodeURIComponent(Url)}&apikey=${apikeys}`

        console.log(ApiUrl);
        let response;

        try {
            response = await func.fetchJson(ApiUrl)
        } catch (error) {
            console.error(error)
        }

        console.log(response)

        if (m.args[1] === '--hd') {
        let url = response.data[1].url

        console.log(url)

        let sendFile = url

        try {
            await m.reply( sendFile, { caption: "Done" })
        } catch (err) {
            m.reply("There was a slight problem while sending the video.")
            console.error(err);
        }
    } else if (m.args[1] === '--sd') {
        let url = response.data[0].url

        console.log(url)

        let sendFile = url

        try {
            await m.reply( sendFile, { caption: "Done" })
        } catch (err) {
            m.reply("There was a slight problem while sending the video.")
            console.error(err);
        }
    } else {
            let url = response.data[0].url

            if (url)

            console.log(url)
    
            let sendFile = url
    
            try {
                await m.reply( sendFile, { caption: "Done\n\n*Note*:\n`If you want to change the resolution of this video, try adding '--hd/sd' after you paste the link you copied, if you don't add it then it will be download the video in SD quality (following the default)`" }, wm)
            } catch (err) {
                m.reply("There was a slight problem while sending the video.")
                console.error(err);
            }

    }
    }
}