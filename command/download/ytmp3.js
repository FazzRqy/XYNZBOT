export default {
    command: ["ytmp3", "yta"],
    description: "Download youtube audio",
    example: "Contoh: %p%cmd <Youtube URL>", //%p = prefix, %cmd = command, %text = teks
    name: "yta",
    tags: "download",

    loading: true,

    run: async (m, { conn }) => {
        
        const Url = m.args[0]
        const apikeys = global.APIKeys.neoxr
        
        const ApiUrl = `https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(Url)}&type=audio&quality=128kbps&apikey=${apikeys}`

        console.log(ApiUrl)
        let response;

        try {
            response = await func.fetchJson(ApiUrl)
        } catch (error) {
            console.error(error)
        }


        const { title, channel, thumbnail, duration, views, publish } = response
        const { size, url } = response.data

        console.log(response.data)

        let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
size: ${size || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${publish || "Unknown"}
        `

        const sendFile = url

        console.log(sendFile)

        try {
            await m.reply( thumbnail,  { caption: replyText } )
            await m.reply( sendFile, { mimetype: "audio/mpeg" })
        } catch (err) {
            m.reply("There was a slight problem while sending the audio.")
            console.error(err);
        }
    }
}