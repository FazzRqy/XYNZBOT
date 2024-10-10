export default {
    command: ["ytmp4", "ytv", "ytvp4"],
    description: "Download youtube video",
    name: "ytv",
    tags: "download",

    run: async (m) => {
        const Url = m.args[0]
        const apikeys = global.APIKeys.neoxr

        if (!Url) throw `${m.prefix + m.command} \`\`\`youtube Url\`\`\``

        if (m.args[1] == 'sd') {
            let cekUrl = /^https:\/\/(www\.|m\.)?(youtube|youtu)(\.com|\.be)\/.*/

            let match = Url.match(cekUrl)

            if (!match) {
                m.reply("Make sure you put a youtube URL, not the other URL!")
            } else {
            m.reply(global.msg.dlloading)
            const ApiUrl = `https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(Url)}&type=video&quality=360p&apikey=${apikeys}`
    
            console.log(ApiUrl);
            
            let response;
    
            try {
                response = await func.fetchJson(ApiUrl)
            } catch (error) {
                console.error(error)
            }

            const { title, channel, duration, views, publish } = response
        const { size, url } = response.data

        console.log(response)

        let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
size: ${size || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${publish || "Unknown"}
        `

        const sendFile = url

        try {
            await m.reply( sendFile, {caption: replyText, mimetype: "video/mp4"} )
        } catch (err) {
            m.reply("There was a slight problem while sending the video.")
            console.error(err);
        }
    }
        }
        else if (m.args[1] == 'hd') {
            let cekUrl = /^https:\/\/(www\.|m\.)?(youtube|youtu)(\.com|\.be)\/.*/

            let match = Url.match(cekUrl)

            if (!match) {
                m.reply("Make sure you put a youtube URL, not the other URL!")
            } else {
            m.reply(global.msg.dlloading)
            const ApiUrl = `https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(Url)}&type=video&quality=480p&apikey=${apikeys}`
    
            console.log(ApiUrl);
            
            let response;
    
            try {
                response = await func.fetchJson(ApiUrl)
            } catch (error) {
                console.error(error)
            }

            const { title, channel, duration, views, publish } = response
        const { size, url } = response.data

        console.log(response)

        let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
size: ${size || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${publish || "Unknown"}
        `

        const sendFile = url

        try {
            await m.reply( sendFile, {caption: replyText, mimetype: "video/mp4"} )
        } catch (err) {
            m.reply("There was a slight problem while sending the video.")
            console.error(err);
        }
    }
    }
    else if (m.args[1] == 'fhd') {
        let cekUrl = /^https:\/\/(www\.|m\.)?(youtube|youtu)(\.com|\.be)\/.*/

            let match = Url.match(cekUrl)

            if (!match) {
                m.reply("Make sure you put a youtube URL, not the other URL!")
            } else {
        m.reply(global.msg.dlloading)
        const ApiUrl = `https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(Url)}&type=video&quality=720p60&apikey=${apikeys}`

        console.log(ApiUrl);
        
        let response;

        try {
            response = await func.fetchJson(ApiUrl)
        } catch (error) {
            console.error(error)
        }

        const { title, channel, duration, views, publish } = response
    const { size, url } = response.data

    console.log(response)

    let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
size: ${size || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${publish || "Unknown"}
    `

    const sendFile = url

    try {
        await m.reply( sendFile, {caption: replyText, mimetype: "video/mp4"} )
    } catch (err) {
        m.reply("There was a slight problem while sending the video.")
        console.error(err);
    }
    }
}
    else if (m.args[1] == 'qhd') {
        let cekUrl = /^https:\/\/(www\.|m\.)?(youtube|youtu)(\.com|\.be)\/.*/

            let match = Url.match(cekUrl)

            if (!match) {
                m.reply("Make sure you put a youtube URL, not the other URL!")
            } else {
        m.reply(global.msg.dlloading)
            const ApiUrl = `https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(Url)}&type=video&quality=1080p60&apikey=${apikeys}`
    
            console.log(ApiUrl);
            
            let response;
    
            try {
                response = await func.fetchJson(ApiUrl)
            } catch (error) {
                console.error(error)
            }

            const { title, channel, duration, views, publish } = response
        const { size, url } = response.data

        console.log(response)

        let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
size: ${size || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${publish || "Unknown"}
        `

        const sendFile = url

        try {
            await m.reply( sendFile, {caption: replyText, mimetype: "video/mp4"} )
        } catch (err) {
            m.reply("There was a slight problem while sending the video.")
            console.error(err);
        }
    }
    }
    else {
        let cekUrl = /^https:\/\/(www\.|m\.)?(youtube|youtu)(\.com|\.be)\/.*/

            let match = Url.match(cekUrl)

            if (!match) {
                m.reply("Make sure you put a youtube URL, not the other URL!")
            } else {
        m.reply(global.msg.dlloading)
        const ApiUrl = `https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(Url)}&type=video&quality=360p&apikey=${apikeys}`
    
            console.log(ApiUrl);
            
            let response;
    
            try {
                response = await func.fetchJson(ApiUrl)
            } catch (error) {
                console.error(error)
            }

            const { title, channel, duration, views, publish } = response
        const { size, url } = response.data

        console.log(response)

        let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
size: ${size || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${publish || "Unknown"}
        `

        const sendFile = url

        try {
            await m.reply( sendFile, {caption: replyText, mimetype: "video/mp4"} )
        } catch (err) {
            m.reply("There was a slight problem while sending the video.")
            console.error(err);
        }
        }
        }
    }
}