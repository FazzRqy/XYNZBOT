import axios from "axios";
export default {
    command: ["play", "ytplay"],
    description: "Download youtube audio using query",
    name: "play",
    tags: "download",

    run: async (m, { text }) => {
        const qy = text
        const Apikeys = global.APIKeys.neoxr
        const URLApi = global.APIs.neoxr

        if (!qy) throw global.msg.noText + `\n\n Example: ${ m.prefix + m.command } Doja - Central Cee`

        const urlApi = `${URLApi + '/api/play?q=' + encodeURIComponent(qy) + '&apikey=' + Apikeys}`

        console.log(urlApi)

        let response

        try {
            response = await axios.get(urlApi)
        } catch (error) {
            console.log(error)
            m.reply("error", error)
        }

        if (response.status == 'false') throw 'Fetch Error/Failed'

        const { title, channel, thumbnail, duration, views, publish } = response

        let thumb = thumbnail

        console.log(response.data)

        let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${publish || "Unknown"}
        `

        const sendFile = response.data.url

        console.log(sendFile)

        try {
            await m.reply( thumb,  { caption: replyText } )
            await m.reply( sendFile, { caption: "Done", mimetype: "audio/mpeg" })
        } catch (err) {
            m.reply("Error: " + err)
            console.error(err);
        }
    }
    }